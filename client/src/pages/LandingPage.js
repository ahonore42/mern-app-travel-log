import React from 'react'
import TravelImg from '../assets/travel.png'
import TravelPath from '../assets/path.svg'
import Hero from '../components/Hero'
import '../styles/Landing.css'
import Nav from '../components/Nav'

export default ({ children }) => {
  return (
    <div className="landing-page flex-row">
      <section className="left flex-lg flex-col">
        <div className="mask flex-col">
          <div className="content-wrapper flex-col">
            <h3 className="logo">Logo</h3>
            <div className="hero-wrapper flex-row">
              <div className="cl-left flex-col">
                <Hero />
              </div>
              <div className="cl-right flex-col">
                <div className="path-wrapper">
                  <img src={TravelPath} alt="path" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="img-wrapper">
          <img src={TravelImg} alt="water" />
        </div>
      </section>
      <section className="right flex-sm">
        <Nav />
        {children}
      </section>
    </div>
  )
}
