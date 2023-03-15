import style from "@/styles/Featured.module.css"
import Image from "next/image"
import chevronLeft from "/public/img/arrowl.png"
import chevronRight from "/public/img/arrowr.png"
import featured1 from "/public/img/featured.png"
import featured2 from "/public/img/featured2.png"
import featured3 from "/public/img/featured3.png"

const pizzas = [
  featured1,
  featured2,
  featured3,
]


const Featured = () => {
  return (
    <div className={style.container}>
      <Image src={chevronLeft} alt="chevron" layout="fill" />
      <div className={style.wrapper}>
        <div className={style.imgContainer}>
          {
            pizzas.map((pizza, i) => {
            return(
              <Image src={pizza} key={i} alt="pizza" width="350" height="" />
              )
            })
          }
        </div>
      </div>
      <Image src={chevronRight} alt="chevron" layout="fill"/>
    </div>
  )
}

export default Featured