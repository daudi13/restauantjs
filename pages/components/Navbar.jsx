import Image from "next/image"
import styles from "@/styles/Navbar.module.css"
import pic from "/public/img/telephone.png"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src={pic} alt="telephone icon" width="32" height="32"/>
        </div>
        <div className={styles.text}>
          <div className={styles.texts}>ORDER NOW</div>
          <div className={styles.texts}>+254-745-294-210</div>
        </div>
      </div>
      <div className={styles.item}></div>
      <div className={styles.item}></div>
      <div className={styles.item}></div>
    </div>
  )
}

export default Navbar