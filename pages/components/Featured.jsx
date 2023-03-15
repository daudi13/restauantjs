import style from "@/styles/Featured.module.css"
import Image from "next/image"
import chevronLeft from "/public/img/arrowl.png"
import chevronRight from "/public/img/arrowr.png"
import featured1 from "/public/img/featured1.png"
import featured2 from "/public/img/featured2.png"
import featured3 from "/public/img/pizza.png"

const pizzas = [
  featured1,
  featured2,
  featured3,
]


const Featured = () => {
  return (
    <div className={style.container}>
      <Image src={chevronLeft} alt="chevron" width="50" height="50" />
      <div className={style.wrapper}>
        <div  key={i}className={style.imgContainer}>
          {
            pizzas.map((pizza, i) => {
            return(
              <Image src={pizza} alt="pizza" width="350" height="" />
              )
            })
          }
        </div>
      </div>
      <Image src={chevronRight} alt="chevron" width="50" height="50"/>
    </div>
  )
}

export default Featured