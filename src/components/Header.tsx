
import Link from 'next/link';  
import React from 'react';
import Menu from './Menu';
const logo = require("../assets/logo.svg") as string;

const Header: React.FC = () => { 
    return(
        <header>
            <div className="header_ads flex justify-center flex-align-center">
                <span className="">Jobs posted in the last 24 hrs!</span>
                <span className="text-micro ad-link">Click to follow</span>
            </div>
            <div><Menu /></div>
            <div className="logo">
                <Link href="/">
                    <a ><img alt="logo" src={logo} /></a>
                </Link>
            </div>
        </header>
    )
}

export default Header;