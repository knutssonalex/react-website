import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css'
// import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar () {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => { showButton() }, [])

  window.addEventListener('resize', showButton)

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='./' className='navbar-logo' onClick={closeMobileMenu}>
          <img src='./images/GM_logo_white.svg' alt='logo' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/projekt' className='nav-links' onClick={closeMobileMenu}>
              CASE
            </Link>

          </li>
          <li className='nav-item'>
            <Link to='/omOss' className='nav-links' onClick={closeMobileMenu}>
              OM OSS
            </Link>

          </li>
          <li className='nav-item'>
            <Link to='/kontakt' className='nav-links' onClick={closeMobileMenu}>
              KONTAKT
            </Link>

          </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>knapp</Button>}
      </div>

    </nav>

  )
}

export default Navbar
