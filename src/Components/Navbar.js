import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <RouterLink to="/" className="navbar-brand"><img src="./images/logo.png" alt="Satrat" /></RouterLink>
            <ul className="navbar-nav">
                <li className="nav-item"><Link to="education" smooth={true} duration={500} className="nav-link">Education</Link></li>
                <li className="nav-item"><Link to="skills" smooth={true} duration={500} className="nav-link">Skills</Link></li>
                <li className="nav-item"><Link to="experience" smooth={true} duration={500} className="nav-link">Experience</Link></li>
                <li className="nav-item"><Link to="profile" smooth={true} duration={500} className="nav-link">Profile</Link></li>
                <li className="nav-item"><Link to="portfolio" smooth={true} duration={500} className="nav-link">Portfolio</Link></li>
                <li className="nav-item"><Link to="clients" smooth={true} duration={500} className="nav-link">Clients</Link></li>
                <li className="nav-item"><Link to="contact" smooth={true} duration={500} className="nav-link">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;