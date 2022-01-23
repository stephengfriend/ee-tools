import assert from 'assert'
import { promises as fs } from 'fs'
import path from 'path'

import glob from 'fast-glob'
import matter from 'gray-matter'

const PAGES_DIR = path.join(process.cwd(), process.env.PAGES_DIR || 'content/pages/')

export async function fetchPagePaths(dir: string = PAGES_DIR): Promise<string[][]> {
  const paths = glob.sync(dir + '**/*.{md,mdx}')

  return paths.map((path) =>
    path
      .replace(PAGES_DIR, '')
      .replace(/(\/?index)?.mdx?$/, '')
      .split('/')
  )
}

export async function fetchPageFromPath(
  pagePath: string | string[] = ''
): Promise<{ content: string; frontMatter: Record<string, any> }> {
  const paths = await glob(
    `${PAGES_DIR}${
      Array.isArray(pagePath) ? pagePath.join('/') : pagePath
    }{/index.md,/index.mdx,index.md,index.mdx,.md,.mdx}`
  )

  assert(paths.length === 1, `Only 1 of ${paths.map((p) => `"${p}"`).join(' or ')} may exist.`)

  const page = await fs.readFile(paths[0])

  const { content, data: frontMatter } = matter(page)

  return { content, frontMatter }
}
