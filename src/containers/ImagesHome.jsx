import React from 'react';
import image from '../assets/image/all.jpg';
import imageClothes from '../assets/image/clothes.jpg';
import imageElectronics from '../assets/image/electronics..jpg';
import imageFurnituress from '../assets/image/furnitures.jpg';
import imageShoes from '../assets/image/shoes.jpg';
import imageOthers from '../assets/image/others.jpg';
import '../styles/ImagesHome.scss';
import { Link } from 'react-router-dom';


const  ImagesHome = () => {

    return (
        <div className='card_menu' >
            <div className='text'>
                <h1>Check out &</h1>
                <h1 className='yard' >YARD!</h1>
                <h3>Sale online for you</h3>
            </div>
            <div className='img_continers' >
                <Link to={'/all'} >
                    <img src={image} alt="todo" />
                    <h2 className='all' >All</h2>
                </Link>
            </div>
            <div className='img_continers' >
                <Link to={'/clothes'} >
                    <img src={imageClothes} alt="todo" />
                    <h2 className='all' >Clothes</h2>
                </Link>
            </div>
            <div className='img_continers' >
                <Link to={'/electronics'} >
                    <img src={imageElectronics} alt="todo" />
                    <h2 className='all' >Electronics</h2>
                </Link>
            </div>
            <div className='img_continers' >
                <Link to={'/furnitures'} >
                    <img src={imageFurnituress} alt="todo" />
                    <h2 className='all' >Furnitures</h2>
                </Link>  
            </div>
            <div className='img_continers' >
                <Link to={'/shoes'} >
                    <img src={imageShoes} alt="todo" />
                    <h2 className='all' >Shoes</h2>                
                </Link>
            </div>
            <div className='img_continers' >
                <Link to={'/others'} >
                    <img src={imageOthers} alt="todo" />
                    <h2 className='all' >Others</h2>
                </Link>
            </div>
            
        </div>
        
    );
}
export default ImagesHome;