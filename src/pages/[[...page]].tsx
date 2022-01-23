import { useFlags } from '@happykit/flags'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import { MdxRemote } from 'next-mdx-remote/types'

import Card from '~/components/Card'
import Grid from '~/components/Grid'
import Heading from '~/components/Heading'
import PageLayout from '~/components/layouts/Page'
import Paragraph from '~/components/Paragraph'

import { fetchPageFromPath, fetchPagePaths } from '~/lib/content'

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await fetchPagePaths()

  return {
    paths: pages?.map((page) => ({ params: { ...(page ? { page } : {}) } })),
    fallback: false, // Note: In a static-only build, we don't need fallback rendering.
  }
}

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const { content, frontMatter } = await fetchPageFromPath(params?.page)

  const source = await renderToString(content, {
    components: PageComponents,
    scope: frontMatter,
  })

  return {
    props: {
      source,
      frontMatter,
    },
    revalidate: 1,
  }
}

const Page: React.FC<PageProps> = ({ source, frontMatter }) => {
  const content = hydrate(source, { components: PageComponents })
  const flags = useFlags()

  return (
    <PageLayout>
      <Head>
        <title>{frontMatter.title}</title>
        <link rel="icon" href={frontMatter.favicon} />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      {content}
      <div>Validate: {flags.validate ? 'true' : 'false'}</div>
    </PageLayout>
  )
}

export default Page

export interface PageProps {
  source: MdxRemote.Source
  frontMatter: Record<string, any>
}

export const PageComponents = {
  img: Image as React.FunctionComponent,
  h1: Heading.H1,
  p: Paragraph,
  Card: Card,
  Grid: Grid,
}
