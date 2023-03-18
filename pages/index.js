import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Featured from './components/Featured'
import PizzaList from './components/PizzaList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome | Home</title>
        <meta name="description" content="Pizza restauraunt near me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Featured />
      <PizzaList/>
    </div>
  )
}
