import style from "@/styles/Featured.module.css"
import Image from "next/image"
import chevronLeft from "/public/img/arrowl.png"
import chevronRight from "/public/img/arrowr.png"
import featured1 from "/public/img/featured2.png"
import featured2 from "/public/img/featured.png"
import featured3 from "/public/img/featured3.png"

const pizzas = [
  featured1,
  featured2,
  featured3,
]


const Featured = () => {
  return (
    <div className={style.container}>
      <div className={style.arrowContainer} style={{left: 0}}>
        <Image src={chevronLeft} alt="chevron" layout="fill" /> 
      </div>
      <div className={style.wrapper}>
          {
            pizzas.map((pizza, i) => {
              return(
              <div className={style.imgContainer} key={i}>
                  <Image src={pizza} alt="pizza" layout="fill" objectFit="contain"/>
              </div>
              )
            })
          }
      </div>
      <div className={style.arrowContainer} style={{right: 0}}>
        <Image src={chevronRight} alt="chevron" layout="fill"/> 
      </div>
    </div>
  )
}

export default Featured