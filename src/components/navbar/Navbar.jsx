import React from 'react'
import "./Navbar.css"

const Navbar = ({ isScrolling }) => {

    const toTheTop = () => {
        window.scrollTo(0, 0)
    }


  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
        <div className='navbar-logo' onClick={toTheTop}>Guido Magi : Portfolio</div>
        
    </nav>
  )
}

export default Navbar