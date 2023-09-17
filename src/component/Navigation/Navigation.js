import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className=' sticky top-0 z-50 shadow-md backdrop-blur-sm'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gradient-to-r from-[#F15A29] to-[#F7941D] rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#about">About</a></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-md">Sharif Samad</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#about">About</a></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='resume.pdf' download className="btn scale-75" >Download CV</a>
                </div>
            </div>
        </div>
    );
};

export default Navigation;