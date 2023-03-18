import styles from "@/styles/Footer.module.css"
import Image from "next/image"
import bg from "public/img/bg.png"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src={bg} alt="footer background" objectFit="contain" layout="fit"/>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>"OH YES, WE DID. THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA"</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <address className={styles.add}>
            1654 R. Don Road #304
            <br/>
            New York, 85022
            <br/>
            (604) 867-1010
            <br/>
          </address>
          <address className={styles.add}>
            1654 R. Don Road #304
            <br/>
            New York, 85022
            <br/>
            (604) 867-1010
            <br/>
          </address>
          <address className={styles.add}>
            1654 R. Don Road #304
            <br/>
            New York, 85022
            <br/>
            (604) 867-1010
            <br/>
          </address>
          <address className={styles.add}>
            1654 R. Don Road #304
            <br/>
            New York, 85022
            <br/>
            (604) 867-1010
            <br/>
          </address>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br/> 9:00 -22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 -00:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer