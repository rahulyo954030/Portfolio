import React from 'react'
import pic1 from "../Photos/pic1.jpg"
import pic2 from "../Photos/pic2.jpg"
import pic3 from "../Photos/pic3.jpg"
import pic4 from "../Photos/pic4.jpg"
import pic5 from "../Photos/pic5.jpg"
import pic6 from "../Photos/pic6.jpg"
import pic7 from "../Photos/pic7.jpg"
import pic10 from "../Photos/pic10.jpg"
import pic9 from "../Photos/pic9.jpg"
const Photos = () => {
  return (
    <div>
      <div className='photos_container'>
            
            <div className='pic_container'>
            <div>
                <img src={pic7} alt="photo" />
            </div>
            <div>
                <img src={pic2} alt="photo" />
            </div>
            <div>
                <img src={pic4} alt="photo" />
            </div>
            <div>
                <img src={pic3} alt="photo" />
            </div>
            <div>
                <img src={pic5} alt="photo" />
            </div>
            <div>
                <img src={pic6} alt="photo" />
            </div>
            <div>
                <img src={pic1} alt="photo" />
            </div>
            <div>
                <img src={pic10} alt="photo" />
            </div>
            <div>
                <img src={pic9} alt="photo" />
            </div>
            
            </div>
          </div>
    </div>
  )
}

export default Photos