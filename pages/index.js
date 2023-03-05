import Head from 'next/head'
import { Inter } from 'next/font/google'
import Featured from '@/components/Featured'
import PizzaList from '@/components/PizzaList'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hungry Naki</title>
        <meta name="description" content="Online Pizza shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList />
    </>
  )
}
