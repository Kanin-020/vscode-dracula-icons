import process from 'node:process'

import { config } from 'dotenv'

config({ path: '.env' })

export type FlavorName = 'dracula' | 'draculaPro' | 'draculaProBlade' | 'draculaProBuffy' | 'draculaProLincoln' | 'draculaProMorbius' | 'draculaProVanHelsing' | 'draculaProAlucard'
export type ColorName
  = | 'rosewater'
    | 'flamingo'
    | 'pink'
    | 'mauve'
    | 'red'
    | 'maroon'
    | 'peach'
    | 'yellow'
    | 'green'
    | 'teal'
    | 'sky'
    | 'sapphire'
    | 'blue'
    | 'lavender'
    | 'text'
    | 'overlay1'

// Dracula original
const dracula: Record<ColorName, string> = {
  rosewater: '#FF79C6',
  flamingo: '#FF79C6',
  pink: '#FF79C6',
  mauve: '#BD93F9',
  red: '#FF5555',
  maroon: '#FF5555',
  peach: '#FFB86C',
  yellow: '#F1FA8C',
  green: '#50FA7B',
  teal: '#8BE9FD',
  sky: '#8BE9FD',
  sapphire: '#8BE9FD',
  blue: '#8BE9FD',
  lavender: '#8BE9FD',
  text: '#F8F8F2',
  overlay1: '#44475A',
}

// Dracula Pro
const draculaPro: Record<ColorName, string | undefined> = {
  rosewater: process.env.PRO_PINK,
  flamingo: process.env.PRO_PINK,
  pink: process.env.PRO_PINK,
  mauve: process.env.PRO_PURPLE,
  red: process.env.PRO_RED,
  maroon: process.env.PRO_RED,
  peach: process.env.PRO_ORANGE,
  yellow: process.env.PRO_YELLOW,
  green: process.env.PRO_GREEN,
  teal: process.env.PRO_BLUE,
  sky: process.env.PRO_BLUE,
  sapphire: process.env.PRO_BLUE,
  blue: process.env.PRO_BLUE,
  lavender: process.env.PRO_BLUE,
  text: process.env.PRO_TEXT,
  overlay1: process.env.PRO_OVERLAY,
}

// Dracula Pro Blade
const draculaProBlade: Record<ColorName, string | undefined> = {
  rosewater: process.env.PRO_PINK,
  flamingo: process.env.PRO_PINK,
  pink: process.env.PRO_PINK,
  mauve: process.env.PRO_PURPLE,
  red: process.env.PRO_RED,
  maroon: process.env.PRO_RED,
  peach: process.env.PRO_ORANGE,
  yellow: process.env.PRO_YELLOW,
  green: process.env.PRO_GREEN,
  teal: process.env.PRO_BLUE,
  sky: process.env.PRO_BLUE,
  sapphire: process.env.PRO_BLUE,
  blue: process.env.PRO_BLUE,
  lavender: process.env.PRO_BLUE,
  text: process.env.PRO_TEXT,
  overlay1: process.env.BLADE_OVERLAY,
}

// Dracula Pro Buffy
const draculaProBuffy: Record<ColorName, string | undefined> = {
  rosewater: process.env.PRO_PINK,
  flamingo: process.env.PRO_PINK,
  pink: process.env.PRO_PINK,
  mauve: process.env.PRO_PURPLE,
  red: process.env.PRO_RED,
  maroon: process.env.PRO_RED,
  peach: process.env.PRO_ORANGE,
  yellow: process.env.PRO_YELLOW,
  green: process.env.PRO_GREEN,
  teal: process.env.PRO_BLUE,
  sky: process.env.PRO_BLUE,
  sapphire: process.env.PRO_BLUE,
  blue: process.env.PRO_BLUE,
  lavender: process.env.PRO_BLUE,
  text: process.env.PRO_TEXT,
  overlay1: process.env.BUFFY_OVERLAY,
}

// Dracula Pro Lincoln
const draculaProLincoln: Record<ColorName, string | undefined> = {
  rosewater: process.env.PRO_PINK,
  flamingo: process.env.PRO_PINK,
  pink: process.env.PRO_PINK,
  mauve: process.env.PRO_PURPLE,
  red: process.env.PRO_RED,
  maroon: process.env.PRO_RED,
  peach: process.env.PRO_ORANGE,
  yellow: process.env.PRO_YELLOW,
  green: process.env.PRO_GREEN,
  teal: process.env.PRO_BLUE,
  sky: process.env.PRO_BLUE,
  sapphire: process.env.PRO_BLUE,
  blue: process.env.PRO_BLUE,
  lavender: process.env.PRO_BLUE,
  text: process.env.PRO_TEXT,
  overlay1: process.env.LINCOLN_OVERLAY,
}

// Dracula Pro Morbius
const draculaProMorbius: Record<ColorName, string | undefined> = {
  rosewater: process.env.PRO_PINK,
  flamingo: process.env.PRO_PINK,
  pink: process.env.PRO_PINK,
  mauve: process.env.PRO_PURPLE,
  red: process.env.PRO_RED,
  maroon: process.env.PRO_RED,
  peach: process.env.PRO_ORANGE,
  yellow: process.env.PRO_YELLOW,
  green: process.env.PRO_GREEN,
  teal: process.env.PRO_BLUE,
  sky: process.env.PRO_BLUE,
  sapphire: process.env.PRO_BLUE,
  blue: process.env.PRO_BLUE,
  lavender: process.env.PRO_BLUE,
  text: process.env.PRO_TEXT,
  overlay1: process.env.MORBIUS_OVERLAY,
}

// Dracula Pro Van Helsing
const draculaProVanHelsing: Record<ColorName, string | undefined> = {
  rosewater: process.env.PRO_PINK,
  flamingo: process.env.PRO_PINK,
  pink: process.env.PRO_PINK,
  mauve: process.env.PRO_PURPLE,
  red: process.env.PRO_RED,
  maroon: process.env.PRO_RED,
  peach: process.env.PRO_ORANGE,
  yellow: process.env.PRO_YELLOW,
  green: process.env.PRO_GREEN,
  teal: process.env.PRO_BLUE,
  sky: process.env.PRO_BLUE,
  sapphire: process.env.PRO_BLUE,
  blue: process.env.PRO_BLUE,
  lavender: process.env.PRO_BLUE,
  text: process.env.PRO_TEXT,
  overlay1: process.env.VAN_HELSING_OVERLAY,
}

// Dracula Pro Alucard
const draculaProAlucard: Record<ColorName, string | undefined> = {
  rosewater: process.env.ALUCARD_PINK,
  flamingo: process.env.ALUCARD_PINK,
  pink: process.env.ALUCARD_PINK,
  mauve: process.env.ALUCARD_PURPLE,
  red: process.env.ALUCARD_RED,
  maroon: process.env.ALUCARD_RED,
  peach: process.env.ALUCARD_ORANGE,
  yellow: process.env.ALUCARD_YELLOW,
  green: process.env.ALUCARD_GREEN,
  teal: process.env.ALUCARD_BLUE,
  sky: process.env.ALUCARD_BLUE,
  sapphire: process.env.ALUCARD_BLUE,
  blue: process.env.ALUCARD_BLUE,
  lavender: process.env.ALUCARD_BLUE,
  text: process.env.ALUCARD_TEXT,
  overlay1: process.env.ALUCARD_OVERLAY,
}

/**
 * Simplified ColorName/Hexcode palettes
 */
export const palettes = {
  'css-variables': Object.entries(dracula).map(([color]) => [
    color,
    `var(--vscode-ctp-${color})`,
  ]) as Array<[ColorName, string]>,
  'dracula': Object.entries(dracula) as Array<[ColorName, string]>,
  'draculaPro': Object.entries(draculaPro) as Array<[ColorName, string]>,
  'draculaProBlade': Object.entries(draculaProBlade) as Array<[ColorName, string]>,
  'draculaProBuffy': Object.entries(draculaProBuffy) as Array<[ColorName, string]>,
  'draculaProLincoln': Object.entries(draculaProLincoln) as Array<[ColorName, string]>,
  'draculaProMorbius': Object.entries(draculaProMorbius) as Array<[ColorName, string]>,
  'draculaProVanHelsing': Object.entries(draculaProVanHelsing) as Array<[ColorName, string]>,
  'draculaProAlucard': Object.entries(draculaProAlucard) as Array<[ColorName, string]>,
}

export const folders = [
  'css-variables',
  'dracula',
  'draculaPro',
  'draculaProBlade',
  'draculaProBuffy',
  'draculaProLincoln',
  'draculaProMorbius',
  'draculaProVanHelsing',
  'draculaProAlucard',
] satisfies Array<keyof typeof palettes>
