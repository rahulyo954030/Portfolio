import React from 'react'
import SocialMedia from '../Components/SocialMedia'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='contact_container'>
      <div>
        <img src="https://ca.slack-edge.com/T02QFJUB5DF-U03AS34NCG3-7f56b8652531-512" alt="" />
      </div>
      <div>
        <h2>About</h2>
        <p>Strong in design and integration with intuitive problem-solving skills. Proficient in JAVASCRIPT | CSS, HTML and REACT. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start the career as an entry-level software engineer (MERN Stack Web Developer) with a reputed firm driven by technology.</p>
        <p>
        Skills : HTML | CSS | Java Script | Type Script | React | Redux | Node.js | MongoDB | Express.js | DSA.
        </p>
        <div>
        <p>Mobile : +91 8810632895</p>
      </div>
      <div>
        <p>Gmail : rahulyo954030@gmail.com</p>
      </div>
      <div>
        <SocialMedia/>
      </div>
      </div>
      
    </div>
  )
}

export default Contact