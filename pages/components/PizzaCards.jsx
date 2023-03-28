import styles from "@/styles/PizzaCards.module.css"
import Image from "next/image"

const PizzaCards = ({ pizza }) => {
  const Img = pizza.image
  return (
    <div className={styles.container}>
      <Image src={`${Img}`} alt="pizza" width="200" height="200" />
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>{pizza.price}</span>
      <p className={styles.desc}>
        {pizza.desc}
      </p>
    </div>
  )
}


export default PizzaCards