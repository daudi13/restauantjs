import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome | Home</title>
        <meta name="description" content="Pizza restauraunt near me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar/>
      <main className={styles.main}>
        <h1>Homepage</h1>
      </main>
      <Footer/>
    </div>
  )
}
