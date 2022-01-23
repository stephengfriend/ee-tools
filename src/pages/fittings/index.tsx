import { useFlags } from '@happykit/flags'

import Head from 'next/head'

import Card from '~/components/Card'
import Grid from '~/components/Grid'
import Heading from '~/components/Heading'
import PageLayout from '~/components/layouts/Page'

const Index: React.FC = () => {
  const flags = useFlags()

  return (
    <PageLayout>
      <Head>
        <title>Fittings</title>
      </Head>
      <Heading.H1>Fittings</Heading.H1>
      <Heading.H3>Featured</Heading.H3>
      <Grid>
      <Card title="Documentation &rarr;" url="https://nextjs.org/docs">
        Find in-depth information about Next.js features and API.
      </Card>
      <Card title="Learn &rarr;" url="https://nextjs.org/learn">
        Learn about Next.js in an interactive course with quizzes!
      </Card>
      <Card title="Examples &rarr;" url="https://github.com/vercel/next.js/tree/master/examples">
        Discover and deploy boilerplate example Next.js projects.
      </Card>
      <Card
        title="Deploy &rarr;"
        url="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      >
        Instantly deploy your Next.js site to a public URL with Vercel.
      </Card>
    </Grid>

      <div>Validate: {flags.validate ? 'true' : 'false'}</div>
    </PageLayout>
  )
}

export default Index
