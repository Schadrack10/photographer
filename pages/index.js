import Head from 'next/head'
import Banner from '../components/Banner'

export default function Home() {
  return (
  <>
      <Head>
        <title>Photographer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner/>
  </>
  )
}
