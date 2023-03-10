import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
            <img src={logo} alt="" />
            <nav className='nav-list'>
                <a href="/Shop">Shop</a>
                <a href="/review">Order review</a>
                <a href="/manage">Manage inventory</a>
                </nav>
        </div>
    );
};

export default Header;