import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                Content Healers
            </Link>
            <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <CustomLink to="/Home">Home</CustomLink>
                <CustomLink to="/AboutUs">About Us</CustomLink>
                <CustomLink to="/AboutReiki">About Reiki</CustomLink>
                <CustomLink to="/Prices">Prices</CustomLink>
                <CustomLink to="/Reviews">Reviews</CustomLink>
                <CustomLink to="/SoundBathHealing">Sound Bath Healing</CustomLink>
                <CustomLink to="/EssentialOilSprays">Essential Oils Sprays</CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}
