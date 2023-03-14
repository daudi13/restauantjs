import style from "@/styles/Featured.module.css"
import Image from "next/image"
import chevronLeft from "/public/img/arrowl.png"
import chevronRight from "/public/img/arrowr.png"


const Featured = () => {
  return (
    <div className={StyleSheet.container}>
      <Image src={chevronLeft} alt="chevron" width="50" height="50"/>
      <Image src={chevronRight} alt="chevron" width="50" height="50"/>
    </div>
  )
}

export default Featured