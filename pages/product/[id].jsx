import Image from "next/image"
import styles from "@/styles/Product.module.css";
import { useState } from "react";
import axios from "axios";

const Product = ({pizza}) => {
  const [size, setSize] = useState(0)
  const [prize, setPrize] = useState(pizza.prices[0]);
  const [extras, setExtras] = useState([]);

  const changePrice = (number) => {
    setPrize(prize + number)
  }

  const handleSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size]
    setSize(sizeIndex)
    changePrice(difference)
  }

  const handleChange = (e, option) => {
    const checked = e.target.checked

    if(checked){
      changePrice(option.price);
      setExtras((prev) => [...prev, option])
    } else {
      changePrice(-option.price);
      setExtras(extras.filter(extra => extra._id !== option._id))
    }
  }

  console.log(extras);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.image} alt="pizza" layout="fill" objectFit="contain" /> 
        </div>
      </div> 
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.prize}>{prize}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <button className={styles.btn} onClick={() => handleSize(0)}>Small</button>
          <button className={styles.btn} onClick={() => handleSize(1)}>Medium</button>
          <button className={styles.btn} onClick={() => handleSize(2)}>Large</button>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          {
            pizza.extraOption.map((option) => {
              return (
                  <div className={styles.option} key={option._id}>
                    <input type="checkbox" id={option.text} name={option.text} className={styles.checkbox} onChange={(e) =>handleChange(e, option)} />
                  <label style={{ marginLeft: "10px" }}>{option.text}</label>
                  </div>
              )
            })
          }
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

export const getServerSideProps = async ({params}) => {
  const res = await axios(`http://localhost:3000/api/products/${params.id}`)
  return {
    props: {
      pizza: res.data,
    }
  }
}