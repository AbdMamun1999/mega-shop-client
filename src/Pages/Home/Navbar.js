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
            <div class="navbar-start lg:hidden">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {manuItems}
                    </ul>
                </div>
                <a class="">
                    {/* btn btn-ghost normal-case text-xl font-bold */}
                    <img src={logo} alt="" className='max-w-[50%]'/>
                </a>
            </div>
            <div class="navbar-start hidden lg:flex grow">
                <ul class="menu menu-horizontal p-0 text-white">
                    {manuItems}
                </ul>
            </div>
            <div class="navbar-end flex-none lg:w-1/4">
                <div class="form-control flex flex-row ">
                    <input type="text" placeholder="Search" class="input input-bordered rounded-none focus:outline-none h-10" />
                    <button class="px-2 lg:px-5 bg-black rounded-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;