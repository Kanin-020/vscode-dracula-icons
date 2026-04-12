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
    | 'subtext1'
    | 'subtext0'
    | 'overlay2'
    | 'overlay1'
    | 'overlay0'
    | 'surface2'
    | 'surface1'
    | 'surface0'
    | 'base'
    | 'mantle'
    | 'crust'

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
  text: '#F8F8F2', // FOREGROUND
  subtext1: '#F8F8F2',
  subtext0: '#F8F8F2',
  overlay2: '#44475A', // SELECTION
  overlay1: '#44475A',
  overlay0: '#44475A',
  surface2: '#44475A',
  surface1: '#44475A',
  surface0: '#44475A',
  base: '#282A36', // BACKGROUND
  mantle: '#282A36',
  crust: '#282A36',
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
  teal: process.env.PRO_CYAN,
  sky: process.env.PRO_CYAN,
  sapphire: process.env.PRO_CYAN,
  blue: process.env.PRO_CYAN,
  lavender: process.env.PRO_CYAN,
  text: process.env.PRO_FOREGROUND,
  subtext1: process.env.PRO_FOREGROUND,
  subtext0: process.env.PRO_FOREGROUND,
  overlay2: process.env.PRO_SELECTION,
  overlay1: process.env.PRO_SELECTION,
  overlay0: process.env.PRO_SELECTION,
  surface2: process.env.PRO_SELECTION,
  surface1: process.env.PRO_SELECTION,
  surface0: process.env.PRO_SELECTION,
  base: process.env.PRO_BACKGROUND,
  mantle: process.env.PRO_BACKGROUND,
  crust: process.env.PRO_BACKGROUND,
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
  teal: process.env.PRO_CYAN,
  sky: process.env.PRO_CYAN,
  sapphire: process.env.PRO_CYAN,
  blue: process.env.PRO_CYAN,
  lavender: process.env.PRO_CYAN,
  text: process.env.PRO_FOREGROUND,
  subtext1: process.env.PRO_FOREGROUND,
  subtext0: process.env.PRO_FOREGROUND,
  overlay2: process.env.BLADE_SELECTION,
  overlay1: process.env.BLADE_SELECTION,
  overlay0: process.env.BLADE_SELECTION,
  surface2: process.env.BLADE_SELECTION,
  surface1: process.env.BLADE_SELECTION,
  surface0: process.env.BLADE_SELECTION,
  base: process.env.BLADE_BACKGROUND,
  mantle: process.env.BLADE_BACKGROUND,
  crust: process.env.BLADE_BACKGROUND,
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
  teal: process.env.PRO_CYAN,
  sky: process.env.PRO_CYAN,
  sapphire: process.env.PRO_CYAN,
  blue: process.env.PRO_CYAN,
  lavender: process.env.PRO_CYAN,
  text: process.env.PRO_FOREGROUND,
  subtext1: process.env.PRO_FOREGROUND,
  subtext0: process.env.PRO_FOREGROUND,
  overlay2: process.env.BUFFY_SELECTION,
  overlay1: process.env.BUFFY_SELECTION,
  overlay0: process.env.BUFFY_SELECTION,
  surface2: process.env.BUFFY_SELECTION,
  surface1: process.env.BUFFY_SELECTION,
  surface0: process.env.BUFFY_SELECTION,
  base: process.env.BUFFY_BACKGROUND,
  mantle: process.env.BUFFY_BACKGROUND,
  crust: process.env.BUFFY_BACKGROUND,
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
  teal: process.env.PRO_CYAN,
  sky: process.env.PRO_CYAN,
  sapphire: process.env.PRO_CYAN,
  blue: process.env.PRO_CYAN,
  lavender: process.env.PRO_CYAN,
  text: process.env.PRO_FOREGROUND,
  subtext1: process.env.PRO_FOREGROUND,
  subtext0: process.env.PRO_FOREGROUND,
  overlay2: process.env.LINCOLN_SELECTION,
  overlay1: process.env.LINCOLN_SELECTION,
  overlay0: process.env.LINCOLN_SELECTION,
  surface2: process.env.LINCOLN_SELECTION,
  surface1: process.env.LINCOLN_SELECTION,
  surface0: process.env.LINCOLN_SELECTION,
  base: process.env.LINCOLN_BACKGROUND,
  mantle: process.env.LINCOLN_BACKGROUND,
  crust: process.env.LINCOLN_BACKGROUND,
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
  teal: process.env.PRO_CYAN,
  sky: process.env.PRO_CYAN,
  sapphire: process.env.PRO_CYAN,
  blue: process.env.PRO_CYAN,
  lavender: process.env.PRO_CYAN,
  text: process.env.PRO_FOREGROUND,
  subtext1: process.env.PRO_FOREGROUND,
  subtext0: process.env.PRO_FOREGROUND,
  overlay2: process.env.MORBIUS_SELECTION,
  overlay1: process.env.MORBIUS_SELECTION,
  overlay0: process.env.MORBIUS_SELECTION,
  surface2: process.env.MORBIUS_SELECTION,
  surface1: process.env.MORBIUS_SELECTION,
  surface0: process.env.MORBIUS_SELECTION,
  base: process.env.MORBIUS_BACKGROUND,
  mantle: process.env.MORBIUS_BACKGROUND,
  crust: process.env.MORBIUS_BACKGROUND,
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
  teal: process.env.PRO_CYAN,
  sky: process.env.PRO_CYAN,
  sapphire: process.env.PRO_CYAN,
  blue: process.env.PRO_CYAN,
  lavender: process.env.PRO_CYAN,
  text: process.env.PRO_FOREGROUND,
  subtext1: process.env.PRO_FOREGROUND,
  subtext0: process.env.PRO_FOREGROUND,
  overlay2: process.env.VAN_HELSING_SELECTION,
  overlay1: process.env.VAN_HELSING_SELECTION,
  overlay0: process.env.VAN_HELSING_SELECTION,
  surface2: process.env.VAN_HELSING_SELECTION,
  surface1: process.env.VAN_HELSING_SELECTION,
  surface0: process.env.VAN_HELSING_SELECTION,
  base: process.env.VAN_HELSING_BACKGROUND,
  mantle: process.env.VAN_HELSING_BACKGROUND,
  crust: process.env.VAN_HELSING_BACKGROUND,
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
  teal: process.env.ALUCARD_CYAN,
  sky: process.env.ALUCARD_CYAN,
  sapphire: process.env.ALUCARD_CYAN,
  blue: process.env.ALUCARD_CYAN,
  lavender: process.env.ALUCARD_CYAN,
  text: process.env.ALUCARD_FOREGROUND,
  subtext1: process.env.ALUCARD_FOREGROUND,
  subtext0: process.env.ALUCARD_FOREGROUND,
  overlay2: process.env.ALUCARD_SELECTION,
  overlay1: process.env.ALUCARD_SELECTION,
  overlay0: process.env.ALUCARD_SELECTION,
  surface2: process.env.ALUCARD_SELECTION,
  surface1: process.env.ALUCARD_SELECTION,
  surface0: process.env.ALUCARD_SELECTION,
  base: process.env.ALUCARD_BACKGROUND,
  mantle: process.env.ALUCARD_BACKGROUND,
  crust: process.env.ALUCARD_BACKGROUND,
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
