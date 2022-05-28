import React from 'react'
import Navbar from '../Components/Navbar'
import {Routes, Route} from "react-router-dom"
import Bio from '../Pages/Bio'
import Projects from '../Pages/Projects'
import Photos from '../Pages/Photos'
import Contact from '../Pages/Contact'
import Footer from "../Components/Footer"
import Home from '../Pages/Home'


const MainRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='bio' element={<Bio/>} />
            <Route path='project' element={<Projects/>} />
            <Route path='photos' element={<Photos/>} />
            <Route path='contact' element={<Contact/>} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default MainRoutes

