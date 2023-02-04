import React from 'react';
import { Link } from 'react-router-dom';
import LogoYard from '../assets/logos/LogoYard';
import  '../styles/Header.scss';

const NavbarLeft = () => {


    return (
        <div className="navbar-left">
            <LogoYard className= 'logo-header'/>

            <ul className="activate">
                <li className='to_home' >
                    <Link to={'/'} >
                        HOME
                    </Link>
                </li>
                <li>
                    <Link to={'/all'} >
                        All
                    </Link>
                </li>
                <li>
                    <Link to={'/clothes'} >
                        Clothes
                    </Link>
                </li>
                <li>
                    <Link to={'/electronics'} >
                        Electronics
                    </Link>
                </li>
                <li>
                    <Link to={'/furnitures'} >
                        Furnitures
                    </Link>
                </li>
                <li>
                    <Link to={'/shoes'} >
                        Shoes
                    </Link>
                </li>
                <li>
                    <Link to={'/others'} >
                        Others
                    </Link>
                </li>
            </ul>
        </div>
    )
} 
export default NavbarLeft;