import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/AdamImage.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Adam Dickinson</h1>
        <h5 className="text-light">Belgium Campus 3rd Year Student</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me"></div>
        <img src={ME} alt='me' />
      </div>

      <a href='#contact' className='scroll__down'>Scroll Down</a>
    </header>
  )
}

export default Header