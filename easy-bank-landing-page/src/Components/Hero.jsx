import React from 'react'
import heroImg from "../images/image-mockups.png"


const Hero = () => {


  return (
    <section className='Hero'>
      <div className='HeroImg'>
        <img className='HeroImgImg' src={heroImg} alt='pic' />
      </div>
      <div className='HeroContent'>
        <h2>Next generation digital banking</h2>
        <p>Take your financial life online. Your Easybank account will be a one-stop-shop
          for spending, saving, budgeting, investing, and much more.</p>
        <button>Request Invite</button>
      </div>
    </section>
  )


}

export default Hero