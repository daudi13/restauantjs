import styles from "@/styles/Cart.module.css";
import Image from "next/image";
import pizza from "/public/img/pizza.png"

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.box1}>
              <div className={styles.imgContainer}>
                <Image src={pizza} objectFit="cover" alt="" className={styles.image} />
              </div>
            </td>
            <td className={styles.box}>
              <div className={styles.name}>CORALZO</div>
            </td>
            <td className={styles.box}>
              <div className={styles.extras}>
                Double Ingredients, spicy sauce
              </div>
            </td>
            <td className={styles.box}>
              <div className={styles.price}>$19.90</div>
            </td>
            <td className={styles.box}>
              <div className={styles.quantity}>2</div>
            </td>
            <td className={styles.box}>
              <div className={styles.total}>$39.80</div>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button className={styles.button}>Check out</button>
        </div>
      </div>
    </div>
  )
}

export default Cart