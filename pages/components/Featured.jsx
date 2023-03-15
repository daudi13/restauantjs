import style from "@/styles/Featured.module.css"
import Image from "next/image"
import chevronLeft from "/public/img/arrowl.png"
import chevronRight from "/public/img/arrowr.png"
import featured1 from "/public/img/featured1.jpg"
import featured2 from "/public/img/featured2.jpeg"
import featured3 from "/public/img/featured3.jpeg"

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
        {
          pizzas.map((pizza, i) => {
            return(
              <div  key={i}className={style.imgContainer}>
                <Image src={pizza} alt="pizza" width="150" height="150" />
              </div>
            )
          })
        }
      </div>
      <Image src={chevronRight} alt="chevron" width="50" height="50"/>
    </div>
  )
}

export default Featured