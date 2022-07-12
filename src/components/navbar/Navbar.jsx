import React from 'react'
import "./Navbar.css"

const Navbar = ({ isScrolling }) => {

    const toTheTop = () => {
        window.scrollTo(0, 0)
    }


  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
        <div className='navbar-logo' onClick={toTheTop}>
          <i className="fab fa-solid fa-user user"> GM</i>
        </div>
        
    </nav>
  )
}

export default Navbar