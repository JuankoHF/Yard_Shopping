import React, {useState, useContext, useEffect} from "react";
import MenuAccount from "./MenuAccount";
import '../styles/Header.scss';
import Menu from '../assets/icons/Menu';
import ShoppingCart from '../assets/icons/ShoppingCart'
import AppContext from "../context/AppContext";
import MyOrder from "../containers/MyOrder";
import NavbarLeft from "./NavbarLeft";

const Header = () => {
    const[toggle, setToggle] = useState(false);
    const[toggleOrders, setToggleOrders] = useState(false);
    const[openMenu, setOpenMenu] = useState(false);
    const[bigMenu, setBigMenu ] = useState(window.innerWidth);
    const { state } = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    function animateMenu() {
        setOpenMenu(!openMenu);
    }

    const actualWidth = () => {
        setBigMenu(window.innerWidth);
    }
    
    useEffect(()=>{
        window.addEventListener('resize', actualWidth);

        return()=>{
            window.addEventListener('resize', actualWidth);
        }
    })

    const forLS = 'Create account';
    const showUser = () => {
        var userName = '';
        if(!localStorage.getItem('usuario')) {
            localStorage.setItem('usuario', JSON.stringify(forLS));
            userName = forLS;
            
        } else {
            const userDate = JSON.parse(localStorage.getItem('usuario'));
            if (userDate === forLS) {
                userName = forLS;
            } else {
                userName = userDate.name;
            }
            
        }
    
        return userName;
    }

    return (
        <nav>
            <Menu onClick={()=> animateMenu() } className= 'menu-header' />

            {(bigMenu > 790) ?(
                <NavbarLeft />
            ) : (openMenu) && (
                <div onClick={()=> animateMenu()} >
                    <NavbarLeft />
                </div>
                
            )}
           
            <div className="navbar-right">
                <ul>
                    <li onClick={handleToggle} className="navbar-email">{showUser()}</li>
                    <li onClick = {() => setToggleOrders(!toggleOrders)} className="navbar-shopping-cart">
                        <ShoppingCart />
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                    </li>
                </ul>
            </div>
         
            {toggle && 
                <div onClick={handleToggle} className='container_element' >
                    <MenuAccount />
                </div>
                
            }
            {toggleOrders && 
                <div className='container_Myorder' >
                    <MyOrder />
                </div>
            } 
            
        </nav>
    );
}
export default Header;
