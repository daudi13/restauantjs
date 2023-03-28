import styles from "@/styles/PizzaCards.module.css"
import Image from "next/image"
import Link from "next/link"

const PizzaCards = ({ pizza }) => {
  const Img = pizza.image
  return (
    <div className={styles.container}>
        <Link href={`/product/${pizza._id}`} className={styles.link}>
          <Image src={`${Img}`} alt="pizza" width="200" height="200" />
          <h1 className={styles.title}>{pizza.title}</h1>
          <span className={styles.price}>${pizza.prices[0]}</span>
          <p className={styles.desc}>
            {pizza.desc}
          </p>
        </Link>
      </div>
  )
}


export default PizzaCards