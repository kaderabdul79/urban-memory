import { MenuOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';

const Header = () => {
    const [active,setActive] = useState(false)
    const showMenu = () => {
        setActive(!active)
    }
    return (
        <div className="w-full absolute lg:flex items-center justify-between px-6 flex bg-green-500">
                <span className="text-2xl text-white uppercase font-extrabold hover:scale-90"><b className="text-6xl">v</b>illage</span>

                <nav className="">
                    <ul className="hidden lg:flex gap-8 p-6 uppercase text-white font-medium">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/">Foods</Link></li>
                        <li><Link to="/">Resources</Link></li>
                        <li><Link to="/">Donate</Link></li>
                        <li><Link to="/">About Our Village</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>  
                    <MobileNav active={active} showMenu={showMenu}></MobileNav>
                </nav>

                <div className="lg:hidden scale-105">
                    <MenuOutlined onClick={showMenu} className="cursor-pointer" />
                </div>
        </div>
    );
};

export default Header;