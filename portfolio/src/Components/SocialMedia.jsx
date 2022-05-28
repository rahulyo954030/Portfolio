import React from 'react'
import "./SocialMedia.css"
import {Link} from "react-router-dom"

const SocialMedia = () => {
  return (
    <div className='socialMedia_container'>
      <a href="https://www.instagram.com/rahulsingh954030/"><div><img src="https://pnggrid.com/wp-content/uploads/2021/05/Instagram-Logo-1024x982.png" alt="" /></div></a>
       <a href="https://www.facebook.com/profile.php?id=100010685251789"> <div><img src="https://i.pinimg.com/736x/da/3c/91/da3c9115cac7dd3487a52565f760897d.jpg" alt="" /></div></a>
      <a href="https://www.linkedin.com/in/rahul-singh-437a4b234/"> <div><img src="https://gartman.com/wp-content/uploads/2020/08/57-571935_linkedin-icon-vector-png-linkedin-circle-logo-transparent.jpg" alt="" /></div></a> 
       <a href="https://github.com/rahulyo954030"> <div><img src="https://www.kindpng.com/picc/m/255-2558173_github-logo-png-transparent-png.png" alt="" /></div></a>
        
    </div>
  )
}

export default SocialMedia