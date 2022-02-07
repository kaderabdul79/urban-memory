import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-full bg-green-600 absolute lg:flex items-center p-4 flex justify-between'>
                <span className='text-4xl font-extrabold uppercase text-white select-none'>A.Kader</span>

                <nav className=''>
                    <ul className='hidden lg:flex gap-8 uppercase p-6 text-white font-medium'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>Foods</Link></li>
                        <li><Link to='/'>Works</Link></li>
                        <li><Link to='/'>Memory</Link></li>
                        <li><Link to='/'>About</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </nav>

            </div>
    );
};

export default Header;