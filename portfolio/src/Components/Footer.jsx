import React from 'react'
import "./Footer.css"
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <div className='footer_div'>
        <p>© 2022 by Rahul Singh. Proudly created with React.js</p>
        <SocialMedia/>
    </div>
  )
}

export default Footer