import React, { Component } from 'react'
import "./Home.css"

import video1 from "../Videos/boat.mp4"
import Photos from './Photos'



const Home = () => {
  return (
    <div>
    <div className='Home_parent'>
        <div className='pro_info'>
        <div>
            <h2>🅷🅸 🅸'🅼</h2>
        </div>
        <div>
            <h1>🆁🅰🅷🆄🅻 🆂🅸🅽🅶🅷</h1>
        </div>
        <div>
            <ul>
                <li><span>🅵🆄🅻🅻  🆂🆃🅰🅲🅺 🆆🅴🅱  🅳🅴🆅🅴🅻🅾🅿🅴🆁</span></li>
                <li><span>🆅🅸🅳🅴🅾  🅲🆁🅴🅰🆃🅾🆁</span></li>
            </ul>
        </div>
        </div>
        <div className='profilepic_div'>
            <img className='profile_pic' src="https://ca.slack-edge.com/T02QFJUB5DF-U03AS34NCG3-7f56b8652531-512" alt="profile picture" />
        </div>
    </div>
        <div className='about-parent'>
            <div>
                <h2>About Me</h2>
            </div>
            <div>
                <p>Hello,
                Strong in design and integration with intuitive problem-solving skills. Proficient in JAVASCRIPT, CSS, HTML and REACT. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start the career as an entry-level software engineer (MERN Stack Web Developer) with a reputed firm driven by technology.</p>
            </div>
            <div className='view_resume-div'>
                <div className='view_resume'>
              <a href="https://drive.google.com/file/d/1z6S-tqT9moZ2L_DqTLrzgr3QEZfX_TQi/view?usp=sharing">  <h3>View Full Resume</h3></a>
                </div>
            </div>
        </div>
        <div className='projectHeading'>
            <div className='recentprojectHeading'>
            <h1>Recent Project</h1>
            </div>
            <div className='video_div'>
                
                <video src={video1} width="90%"
                    controls
                    loop
                    autoPlay
                    muted></video>
            </div>
        </div>
        <div>
            <Photos/>
        </div>
        
        <div className='Home_parent'>
        <div className='profilepic_div'>
            <img className='profile_pic' src="https://ca.slack-edge.com/T02QFJUB5DF-U03AS34NCG3-7f56b8652531-512" alt="profile picture" />
        </div>

        <div className='lower_info'>    
        <div>
            <h2>Contact</h2>
        </div>
        <div>
            <h3>🆁🅰🅷🆄🅻 🆂🅸🅽🅶🅷</h3>
        </div>
        <div>
            <h3>🅵🆄🅻🅻 🆂🆃🅰🅲🅺 🆆🅴🅱 🅳🅴🆅🅴🅻🅾🅿🅴🆁</h3>
        </div>
        <div>
            <p>rahulyo954030@gmail.com</p>
            <p>+91 8810632895</p>
        </div>
        </div>
        
    </div>
    
    </div>
  )
}

export default Home
