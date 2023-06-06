import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import AboutSection from './components/MainSection/AboutSection/AboutSection'
import ContactSection from './components/MainSection/ContactSection/ContactSection'
import HeroSection from './components/MainSection/HeroSection/HeroSection'
import WorkSection from './components/MainSection/WorkSection/WorkSection'
import Navbar from './components/Navbar/Navbar'
gsap.registerPlugin(ScrollTrigger)
// import MainSection from './components/MainSection/MainSection'

export default function MainContainer({ theme, toggleTheme }) {
  const component = useRef()
  const slider = useRef()

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray('.panel')
      let pauseRatio = 0.1
      let snapPauseRatio = pauseRatio / (pauseRatio * 2 + 1)
      let snapPanelRatio = 1 / (panels.length - 1) / (pauseRatio * 2 + 1)
      let snapValues = panels.map(
        (panel, i) => snapPauseRatio + i * snapPanelRatio
      )
      snapValues.unshift(0)
      snapValues.push(1)
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 0.5,
          snap: snapValues,
          end: () => '+=' + slider.current.offsetWidth,
          // markers: true,
        },
      })
      tl.to(
        panels,
        {
          xPercent: -100 * (panels.length - 1),
          duration: 1,
          ease: 'none',
        },
        pauseRatio
      )
      tl.to({}, { duration: pauseRatio })

      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          containerAnimation: tl,
          start: 'left center',
          end: 'right center',
          onToggle: (self) => {
            if (self.isActive) {
              console.log('enter panel index:', i)
            }
          },
        })
      })
    }, component)
    return () => ctx.revert()
  })

  return (
    <div>
      <div ref={component} className="App">
        <div className="navbar-container">
          <Navbar toggleTheme={toggleTheme} theme={theme} />
        </div>
        <div ref={slider} className="container">
          <div className="panel  section-container ">
            <div className="section-content hero-section-container">
              {/* <HeroSection theme={theme} /> */}
              <div className="hero-text"></div>
            </div>
          </div>
          <div className="panel section-container">
            {' '}
            <div className="section-content">
              <AboutSection theme={theme} />
            </div>
            <div className="section-header-box">About</div>
          </div>
          <div className="panel  section-container">
            {' '}
            <div className="section-content">
              <WorkSection theme={theme} />
            </div>
            <div className="section-header-box work-header-box">Work</div>
          </div>
          <div className="panel  section-container">
            {' '}
            <div className="section-content">
              <ContactSection theme={theme} />
            </div>
            <div className="section-header-box">Contact</div>
          </div>
        </div>
      </div>
    </div>
  )
}
