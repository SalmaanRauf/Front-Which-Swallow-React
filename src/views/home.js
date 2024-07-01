import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Front Which Swallow</title>
        <meta property="og:title" content="Front Which Swallow" />
      </Helmet>
      <Navbar8></Navbar8>
      <Hero17></Hero17>
      <Features24></Features24>
      <CTA26></CTA26>
      <Features25></Features25>
      <Pricing14></Pricing14>
      <Steps2></Steps2>
      <Testimonial17></Testimonial17>
      <Contact10></Contact10>
      <Footer4></Footer4>
    </div>
  )
}

export default Home
