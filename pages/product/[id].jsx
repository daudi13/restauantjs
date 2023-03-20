import Image from "next/image"
import styles from "@/styles/Product.module.css";
import pizzaImg from "/public/img/pizza.png";
import { useState } from "react";

const Product = () => {
  const [size, setSize] = useState(0)

  const pizza = {
    id: 1,
    img: pizzaImg,
    name: "campangola",
    prize: [19.9, 23.9, 27.9],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
  }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} alt="pizza" layout="fill" objectFit="contain" /> 
        </div>
      </div> 
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.prize}>${pizza.prize[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <button className={styles.btn} onClick={() => setSize(0)}>Small</button>
          <button className={styles.btn} onClick={() => setSize(1)}>Medium</button>
          <button className={styles.btn} onClick={() => setSize(2)}>Large</button>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input type="checkbox" id="double" name="double" className={styles.checkbox} />
            <label style={{marginLeft: "10px"}}>Double ingredients</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" id="cheese" name="cheese" className={styles.checkbox} />
            <label style={{marginLeft: "10px"}}>Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" id="spicy" name="spicy" className={styles.checkbox} />
            <label style={{marginLeft: "10px"}}>Spicy sause</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" id="garlic" name="garlic" className={styles.checkbox} />
            <label style={{marginLeft: "10px"}}>Garlic sause</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to cart</button>
        </div>
      </div> 
    </div>
  )
}

export default Product;