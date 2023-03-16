import style from "@/styles/Featured.module.css"
import Image from "next/image"
import chevronLeft from "/public/img/arrowl.png"
import chevronRight from "/public/img/arrowr.png"
import featured1 from "/public/img/featured2.png"
import featured2 from "/public/img/featured.png"
import featured3 from "/public/img/featured3.png"
import { useState } from "react"



const Featured = () => {
  const pizzas = [featured1, featured2, featured3];
  const [index, setIndex] = useState(0);

  const handleArrow = (direction) => {
    if(direction === "l"){
      setIndex(index !== 0 ? index -1 : 2)
    }
    if(direction === "r"){
      setIndex(index !== 2 ? index+1 : 0)
    }
  }

  console.log(index)

  return (
    <div className={style.container}>
      <div className={style.arrowContainer} style={{left: 0}} onClick={()=> handleArrow("l")}>
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
      <div className={style.arrowContainer} style={{right: 0}} onClick={()=> handleArrow("r")}>
        <Image src={chevronRight} alt="chevron" layout="fill"/> 
      </div>
    </div>
  )
}

export default Featured