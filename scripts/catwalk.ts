import type { FlavorName } from '~/utils/palettes'
import { mkdtemp, readdir, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join, resolve, sep } from 'node:path'
import { exit } from 'node:process'
import { consola } from 'consola'
import { launch } from 'puppeteer'
import sharp from 'sharp'
import { folders, palettes } from '~/utils/palettes'

const OUT = 'assets/catwalk.webp'
const HEIGHT = 1200
const WIDTH = 2100

const flavorEntries = folders
  .filter(f => f !== 'css-variables')
  .map(f => [f, Object.fromEntries(palettes[f])] as const)

const allIcons = await readdir('icons/dracula')
const fileIcons = allIcons
  .filter(i => !i.startsWith('folder_') && !i.startsWith('_'))
  .toSorted(() => 0.5 - Math.random())

function generateIcons(flavor: FlavorName) {
  return Array.from({ length: 6 })
    .flatMap(() => fileIcons.map(i => resolve(join('icons', flavor, i))))
}

function generateHtml(flavor: FlavorName) {
  const flavorColors = Object.fromEntries(palettes[flavor])
  const icons = generateIcons(flavor)

  return `
  <html>
    <head>
      <style>
        body {
          color: ${flavorColors.text};
          background-color: ${flavorColors.base};
        }
        .icon {
          width: 96px;
          height: 96px;
        }
        .grid {
          transform: rotate(-30deg) translate(0%, -50%);
          width: 200%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
        }
      </style>
    </head>
    <body>
      <div class="grid">
        ${icons.map(i => `<img class="icon" src="${i}">`).join('\n')}
      </div>
    </body>
  </html>
`
}

try {
  consola.info('Generating preview...')

  const tmp = await mkdtemp(join(tmpdir(), sep))

  const images = await Promise.all(flavorEntries.map(async ([flavor]) => {
    const htmlPath = join(tmp, `${flavor}.html`)
    const screenshotPath = join(tmp, `${flavor}.png`) as `${string}.png`

    await writeFile(htmlPath, generateHtml(flavor as FlavorName))

    const browser = await launch({ args: ['--no-sandbox'] })
    const page = await browser.newPage()

    await page.setViewport({
      width: WIDTH,
      height: HEIGHT,
      deviceScaleFactor: 3,
    })

    await page.goto(`file://${htmlPath}`)
    await page.screenshot({ path: screenshotPath })

    await browser.close()
    return screenshotPath
  }))

  // TODO
  const SLICE_COUNT = images.length
  const SLICE_WIDTH = Math.floor(WIDTH / SLICE_COUNT)

  const slices = await Promise.all(
    images.map((img, i) =>
      sharp(img)
        .resize(WIDTH, HEIGHT)
        .extract({
          left: i * SLICE_WIDTH,
          top: 0,
          width: SLICE_WIDTH,
          height: HEIGHT,
        })
        .toBuffer(),
    ),
  )

  const composite = slices.map((input, i) => ({
    input,
    top: 0,
    left: i * SLICE_WIDTH,
  }))

  const totalWidth = WIDTH
  const totalHeight = HEIGHT

  await sharp({
    create: {
      width: totalWidth,
      height: totalHeight,
      channels: 4,
      background: '#282a36',
    },
  })
    .composite(composite)
    .webp()
    .toFile(OUT)

  await rm(tmp, { recursive: true })

  consola.success('Preview generated.')
}
catch (error) {
  consola.error('Preview generation failed: ', error)
  exit(1)
}
