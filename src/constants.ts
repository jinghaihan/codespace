import pkgJson from '../package.json'

export const NAME = pkgJson.name
export const VERSION = pkgJson.version

export const MODE_CHOICES = ['update', 'detect', 'combine'] as const

export const DEFAULT_OPTIONS = {
  ignorePaths: [],
  path: false,
  mtimeDeep: 1,
  mtimeConcurrency: 30,
  tildify: false,
  gitBranch: false,
  source: false,
  overwrite: true,
  json: false,
  yes: false,
}

export const JSON_MARKER = '<!-- code-finder -->'

/// keep-sorted
export const VERSION_CONTROL_DIRECTORIES = [
  '.git',
  '.github',
  '.hg',
  '.svn',
]

/// keep-sorted
export const IDE_DIRECTORIES = [
  '.cursor',
  '.idea',
  '.vscode',
]

/// keep-sorted
export const INSTALL_DIRECTORIES = [
  'node_modules',
]

/// keep-sorted
export const WORKSPACE_FILES = [
  '.gitignore',
  'LICENSE.md',
  'LICENSE',
  'README.md',
]

/// keep-sorted
export const CONFIG_FILES = [
  'go.mod',
  'package.json',
  'pom.xml',
]

/// keep-sorted
export const LOCK_FILES = [
  'bun.lock',
  'bun.lockb',
  'deno.lock',
  'npm-shrinkwrap.json',
  'package-lock.json',
  'pnpm-lock.yaml',
  'pnpm-workspace.yaml',
  'yarn.lock',
]

export const IGNORE_DIRECTORIES = ['**/node_modules/**']

/// keep-sorted
export const IGNORE_FILES = [
  '.git/**',
  '.github/**',
  '.hg/**',
  '.next/**',
  '.nuxt/**',
  '.svn/**',
  '*.log',
  'build/**',
  'coverage/**',
  'dist/**',
  'node_modules/**',
  'temp/**',
  'tmp/**',
]

export const CODESPACE_DIRECTORIES = [
  ...VERSION_CONTROL_DIRECTORIES,
  ...IDE_DIRECTORIES,
  ...INSTALL_DIRECTORIES,
]

export const CODESPACE_FILES = [
  ...WORKSPACE_FILES,
  ...CONFIG_FILES,
  ...LOCK_FILES,
]

/// keep-sorted
export const CODE_NAME_CHOICES = [
  'Antigravity',
  'Code - Insiders',
  'Code',
  'Cursor',
  'VSCodium - Insiders',
  'VSCodium',
  'Windsurf',
] as const

/// keep-sorted
export const EDITOR_NAME_MAP = {
  'Antigravity': 'Antigravity',
  'Code - Insiders': 'Visual Studio Code - Insiders',
  'Code': 'Visual Studio Code',
  'Cursor': 'Cursor',
  'VSCodium - Insiders': 'VSCodium - Insiders',
  'VSCodium': 'VSCodium',
  'Windsurf': 'Windsurf',
} as const
