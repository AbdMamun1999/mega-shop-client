import React from 'react';
import logo from '../../Images/logo/logo.webp'

const Navbar = () => {

    const manuItems = <>
        <li><a className='btn btn-ghost normal-case  text-left font-bold text-bold'>Home</a></li>
        <li tabindex="0" className='font-bold '>
            <a href="#">Contact Us</a>
        </li>
        <li className='font-bold '> <a href="">Blog</a></li>
        <li className='font-bold '><a>Shipping & returns</a></li>
        <li className='font-bold '><a>Login</a></li>
    </>

    return (
        <div class="navbar bg-primary lg:px-60">
            
        </div>
    );
};

export default Navbar;