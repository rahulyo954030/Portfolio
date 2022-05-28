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
            <h2>Hi I'm</h2>
        </div>
        <div>
            <h1>Rahul Singh</h1>
        </div>
        <div>
            <ul>
                <li><span>Full Stack Web Developer...</span></li>
                <li><span>Video Creator...</span></li>
            </ul>
        </div>
        </div>
        <div>
            <img className='profile_pic' src="https://ca.slack-edge.com/T02QFJUB5DF-U03AS34NCG3-7f56b8652531-512" alt="profile picture" />
        </div>
    </div>
        <div className='about-parent'>
            <div>
                <h2>About Me</h2>
            </div>
            <div>
                <p>Hello,
I'm Rahul Singh From New Delhi.

I was belong to non coding background but I was very fond of coding in 12th class because in those days there was a lot of craze for Facebook, Instagram, Amazon, and Flipkart so I thought I would do a coding course but due to financial status I was not able to do that.

One day a friend of mine told me about a platform and the name of that platform was Masai School. This is a platform that has changed the education system of the whole of India. So this platform was not an ordinary platform for me. This platform was a very special platform for me. Here I completed my education in Coding (Full Stack Web Development).

After graduating from Masai School, now I have become capable enough that I can give equal competition to those with a CS background. So I want to be an inspiration to all those who want to code even from non-coding background. So I believe that every person should have the passion to do something. If there is passion then a person can do anything.

Thank You.</p>
            </div>
            <div className='view_resume-div'>
                <div className='view_resume'>
                <h3>View Full Resume</h3>
                </div>
            </div>
        </div>
        <div>
            <div>
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
        <div>
            <img className='profile_pic' src="https://ca.slack-edge.com/T02QFJUB5DF-U03AS34NCG3-7f56b8652531-512" alt="profile picture" />
        </div>

        <div className='lower_info'>    
        <div>
            <h4>Contact</h4>
        </div>
        <div>
            <h2>Rahul Singh</h2>
        </div>
        <div>
            <h4>Full Stack Web Developer</h4>
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
