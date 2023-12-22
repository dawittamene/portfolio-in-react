import React from 'react'
import CTa from './CTa'
import ME from '../../assets/dawit.JPG'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Dawit Tamene</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTa/>
        <HeaderSocials/>

      </div>
      <div className="me">
        <img src={ME} alt="me" />
      </div>
      <a href="#contact" className='scroll__down'>Scroll Down</a>
      

    </header>
   
  )
}

export default Header
