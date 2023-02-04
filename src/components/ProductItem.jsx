import React, {useContext} from 'react';
import '../styles/ProductItem.scss';
import AddToCart from '../assets/icons/AddToCar';
import AppContext from '../context/AppContext';

const ProductItem = ({ product }) => {
	const { addCar } = useContext(AppContext);

	const handleClick = item => {
		addCar(item);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				
				<AddToCart onClick={() => handleClick(product)} className='cart_plus' />
				
			</div>
		</div>
	);
}

export default ProductItem;