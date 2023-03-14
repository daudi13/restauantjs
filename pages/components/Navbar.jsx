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
        <div className={styles.texts}>
          <div className={styles.text}>+254-745-294-210</div>
          <div className={styles.text}>ORDER NOW</div>
        </div>
      </div>
      <div className={styles.item}>center</div>
      <div className={styles.item}>right</div>
    </div>
  )
}

export default Navbar