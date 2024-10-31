import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavigationBar(){
    const [click, setClickState] = useState(false);

    // const handleClick = () => setClickState(!click);
    const closeMenu = () => setClickState(false);

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-main'> Personal Project </Link>
                <ul className='navbar-list'>
                    <li><Link to="/" className='navbar-links' onClick={closeMenu}> Home </Link></li>
                    {/* <li><Link to="/about" className='navbar-links' onClick={closeMenu}> About </Link></li>
                    <li><Link to="/projects" className='navbar-links' onClick={closeMenu}> Projects </Link></li>
                    <li><Link to="/contact" className='navbar-links' onClick={closeMenu}> Contact </Link></li> */}
                </ul>
            </div>
        </nav>
    );
}

export default NavigationBar;