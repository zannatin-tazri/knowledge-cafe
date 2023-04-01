import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='nav-container'>
            <div>
            <h2>Knowledge Cafe</h2>
        </div>
        <div className='nav-bar'>
            <button className='btn-search'>About us</button>
        </div>
        </nav>

        
    );
};

export default Header;