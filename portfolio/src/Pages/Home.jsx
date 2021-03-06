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
            <h2>π·πΈ πΈ'πΌ</h2>
        </div>
        <div>
            <h1>ππ°π·ππ» ππΈπ½πΆπ·</h1>
        </div>
        <div>
            <ul>
                <li><span>π΅ππ»π»  πππ°π²πΊ ππ΄π±  π³π΄ππ΄π»πΎπΏπ΄π</span></li>
                <li><span>ππΈπ³π΄πΎ  π²ππ΄π°ππΎπ</span></li>
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
                
       <p> Skills : HTML | CSS | Java Script | Type Script | React | Redux | Node.js | MongoDB | Express.js | DSA.</p>
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
            <h3>ππ°π·ππ» ππΈπ½πΆπ·</h3>
        </div>
        <div>
            <h3>π΅ππ»π» πππ°π²πΊ ππ΄π± π³π΄ππ΄π»πΎπΏπ΄π</h3>
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
