import styles from "@/styles/PizzaCards.module.css"
import Image from "next/image"
import pizza from "/public/img/pizza.png"

const PizzaCards = () => {
  return (
    <div className={styles.container}>
      <Image src={pizza} alt="pizza" width="200" height="200" />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora suscipit nam perferendis nulla nisi, sunt, repellendus temporibus perspiciatis pariatur placeat doloribus. Recusandae, dolor blanditiis! Dolor natus dolorem est mollitia voluptate!
      </p>
    </div>
  )
}


export default PizzaCards