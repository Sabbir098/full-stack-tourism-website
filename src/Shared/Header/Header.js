import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../CustomHooks/useAuth';
import './Header.css';

const Header = () => {
    const {user} = useAuth();
    return (
        <div>
             <div className="nav-container">
            <div className="logo">
                <h1>GhureAshi</h1>
            </div>
            <nav className="item">
            <ul className="ul">
                <li><Link  to="/home">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li ><Link to="/gallery">Gallery</Link></li>
                <li ><Link to="/blog">Blog</Link></li>
                <li ><Link to="/contact-us">Contact Us</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li>signed in : {user.email?user.displayName: ''}</li>
            </ul>
        </nav>
        </div>
        </div>
    );
};

export default Header;