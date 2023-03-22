import styles from "@/styles/Order.module.css"
import Image from "next/image"
import paid from "/public/img/paid.png"
import checked from "/public/img/checked.png"
import delivered from "/public/img/delivered.png"
import prepare from "/public/img/bake.png"
import ontheway from "/public/img/bike.png"

const Order = () => {
  const status = 0
  const statusClass = (index) => {
    if(index-status < 1) return styles.done
    if(index-status === 1) return styles.inProgress
    if(index-status > 1) return styles.undone
  }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.tr}>
              <th>Order Id</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr>
              <td className={styles.box1}>
                <span className={styles.id}>94891034</span>
              </td>
              <td className={styles.box}>
                <div className={styles.name}>John Doe</div>
              </td>
              <td className={styles.box}>
                <div className={styles.address}>
                  Elton st. 334-24
                </div>
              </td>
              <td className={styles.box}>
                <div className={styles.total}>$39.80</div>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src={paid} alt="paid" width={40} height={40} />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image className={styles.checked}src={checked} alt="checked" width={30} height={30}/>
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src={prepare} alt="paid" width={40} height={40} />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image className={styles.checked}src={checked} alt="checked" width={30} height={30} />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src={ontheway} alt="paid" width={40} height={40} />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image className={styles.checked}src={checked} alt="checked" width={30} height={30} />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src={delivered} alt="paid" width={40} height={40} />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image className={styles.checked}src={checked} alt="checked" width={30} height={30} />
            </div>
          </div>
        </div>
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
          <button className={styles.button} disabled>PAID</button>
        </div>
      </div> 
    </div>
  )
}

export default Order