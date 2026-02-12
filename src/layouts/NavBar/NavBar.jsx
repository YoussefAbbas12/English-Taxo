import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = ({isHome}) => {

  const [isOpen , setIsOpen] = useState(true);

  const handleClick = () => setIsOpen(prev => !prev);

  return (
    <header className={`${!isHome?"dark-nav":""}`}>
        <div className="logo"><img loading='lazy' src="/Logo.svg" alt="logo" /></div>
        <i 
          className={`fa-solid ${!isOpen ? "fa-xmark" : "fa-bars"} toggle`}
          onClick={handleClick}
        />
        <div className={`header-left ${isOpen ? "open" : ""}`}>
          <ul>
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li className='dropDown'>
              <Nav>
                <NavDropdown
                  id="nav-dropdown-light-example"
                  title="Courses"
                  menuVariant="light">
                  <NavDropdown.Item><Link to="/KidsPhonics">Kids Phonics</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/KidsEnglishProgram">Kids English Program</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/GeneralEnglish">General English Program</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/SpeakingCourse">Speaking Course For Adults</Link></NavDropdown.Item>
                </NavDropdown>
            </Nav>

            </li>
            <li><Link to="/Announcements" onClick={() => setIsOpen(false)}>Announcements</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/Dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link></li>
          </ul>
          <a href="#footer" onClick={() => setIsOpen(false)} className="btn nav-btn">Book Now</a>
        </div>
    </header>
  )
}

export default NavBar
