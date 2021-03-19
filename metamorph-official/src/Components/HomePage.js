import React, { useEffect, useRef } from 'react'
import '../css/HomePage.scss'
import Navbar from './Navbar'
import Landing from './Landing'
import gsap from 'gsap'
import Gif from "../images/AB.svg"
function HomePage() {


    //   useEffect(() => {      
    //   const tl = gsap.timeline();
    //   tl.to('.logo', {x:1000,rotate:360, ease:"none", duration:0.5})
    //   // tl.to('.logo', {x:-1000,rotate:360, ease:"none", duration:5})
    //   tl.to('.hero-content', {x:1000, ease:"bounce.out", duration: 3, delay:3 })
    //   tl.to('#ball3', {x:1000, ease:"bounce.inOut", duration: 3, delay:6 })
    // }, []);


    return (
      <div className="Website">
          <div>
          <Navbar />
          </div>
          <div>
          <Landing />
          </div>
      </div>
    )
}

export default HomePage