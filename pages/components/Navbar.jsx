import Image from "next/image"
import styles from "@/styles/Navbar.module.css"
import tel from "/public/img/telephone.png"
import logo from "/public/img/logo.png"
import cart from "/public/img/cart.png"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src={tel} alt="telephone icon" width="32" height="32"/>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>+254-745-294-210</div>
          <div className={styles.text}>ORDER NOW</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Product</li>
          <li className={styles.listItem}>Menu</li>
          <Image src={logo} alt="logo icon" width="160" height="69"/>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contacts</li>
        </ul>
      </div>
      <div className={styles.cartItem}>
        <div className={styles.cart}>
          <Image src={cart} alt="telephone icon" width="32" height="32"/>
        </div>
        <div class className={styles.counter}>2</div>
      </div>
    </div>
  )
}

export default Navbar