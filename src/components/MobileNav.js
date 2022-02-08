import { Close } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const MobileNav = ({active,showMenu}) => {
    return (
    <ul className={active ? 'flex-col fixed inset-0 left-2/4 items-center justify-center flex gap-12 uppercase font-medium bg-black/10 z-50' : 'hidden'}>
        <Close onClick={showMenu} className="cursor-pointer"></Close>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/">Foods</Link></li>
        <li><Link to="/">Resources</Link></li>
        <li><Link to="/">Donate</Link></li>
        <li><Link to="/">About Our Village</Link></li>
        <li><Link to="/login">Login</Link></li>
    </ul> 
    );
};

export default MobileNav;