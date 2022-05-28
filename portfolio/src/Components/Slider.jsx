import React from 'react'
import ImageData from './ImageData'
export default function Slider(props){
const Slider = () => {
  return (
    <div>
       {ImageData.map((element, index)=>{
           return(
               <div key={index} className={index === props.slideIndex ? "myslides fade"} >
                   <img src={element.src} alt="" />
               </div>
           )
       })}
    </div>
  )
}

export default Slider
}