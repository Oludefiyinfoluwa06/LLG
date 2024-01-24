import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='p-4 d-flex'>
            <label>Logo</label>
            <ul className='d-flex'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>About</Link></li>
                <li><Link to='/'>Services</Link></li>
                <li><Link to='/'>Contact</Link></li>
                <li><Link to='/'>Languages</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
