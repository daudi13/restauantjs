import style from "@/styles/Featured.module.css"
import Image from "next/image"
import chevronLeft from "/public/img/arrowl.png"
import chevronRight from "/public/img/arrowr.png"


const Featured = () => {
  return (
    <div className={style.container}>
      <Image src={chevronLeft} alt="chevron" width="50" height="50" />
      <div className={style.wrapper}>
        <div className={style.imgContainer}>
          <Image src="" alt="pizza" width="150" height="150" />
        </div>
        <div className={style.imgContainer}>
          <Image src="" alt="pizza" width="150" height="150" />
        </div>
        <div className={style.imgContainer}>
          <Image src="" alt="pizza" width="150" height="150" />
        </div>
        <div className={style.imgContainer}>
          <Image src="" alt="pizza" width="150" height="150" />
        </div>
        <div className={style.imgContainer}>
          <Image src="" alt="pizza" width="150" height="150" />
        </div>
      </div>
      <Image src={chevronRight} alt="chevron" width="50" height="50"/>
    </div>
  )
}

export default Featured