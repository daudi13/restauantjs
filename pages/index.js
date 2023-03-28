import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Featured from './components/Featured'
import PizzaList from './components/PizzaList'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ pizzaList }) {
  console.log(pizzaList)
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome | Home</title>
        <meta name="description" content="Pizza restauraunt near me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios("http://localhost:3000/api/products")
  return {
    props: {
      pizzaList: res.data,
    }
  }
}