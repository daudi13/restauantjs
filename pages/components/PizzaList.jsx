import styles from "@/styles/PizzaList.module.css"
import PizzaCards from "./PizzaCards"

const PizzaList = ({ pizzaList }) => {
  console.log(pizzaList)
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => {
          return <PizzaCards key={pizza._id} pizza={pizza} />
        })}
      </div>
    </div>
  )
}

export default PizzaList