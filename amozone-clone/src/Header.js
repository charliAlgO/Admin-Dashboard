import React from 'react'
import './Header.css'
import logo from './assets/amazonLogo.png'

function Header() {
  return (
    <div className='header'> 
        <img 
            className='header__logo'
            src={logo} alt='amazon logo'
        />

        <div className='header__search'>
            <input 
                className='header__searchInput'
                type="text"
            />
        </div>
    </div>
  )
}

export default Header