import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand"><img src="./images/logo.png" alt="Satrat" /></Link>
            <ul className="navbar-nav">
                <li className="nav-item"><Link to="/education" className="nav-link">Education</Link></li>
                <li className="nav-item"><Link to="/skills" className="nav-link">Skills</Link></li>
                <li className="nav-item"><Link to="/experience" className="nav-link">Experience</Link></li>
                <li className="nav-item"><Link to="/profile" className="nav-link">Profile</Link></li>
                <li className="nav-item"><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
                <li className="nav-item"><Link to="/clients" className="nav-link">Clients</Link></li>
                <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;