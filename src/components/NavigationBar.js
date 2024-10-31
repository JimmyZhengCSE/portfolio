import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

function NavigationBar(){
    const [click, setClickState] = useState(false);

    // const handleClick = () => setClickState(!click);
    const closeMenu = () => setClickState(false);

    return (
        <nav className='bg-gray-400 p-4'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link to="/" className='navbar-main'> Personal Project </Link>
                <ul className='navbar-list flex space-x-4'>
                    <li><Link to="/" className='navbar-links' onClick={closeMenu}> Home </Link></li>
                    <li><Link to="/about" className='navbar-links' onClick={closeMenu}> About </Link></li>
                    <li><Link to="/projects" className='navbar-links' onClick={closeMenu}> Projects </Link></li>
                    <li><Link to="/contact" className='navbar-links' onClick={closeMenu}> Contact </Link></li>
                    <li> <ThemeToggle /></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavigationBar;