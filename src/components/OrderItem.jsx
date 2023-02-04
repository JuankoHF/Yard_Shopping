import React, {useContext}  from 'react';
import AppContext from '../context/AppContext';
import '../styles/OrderItem.scss';

const OrderItem = ({product }) => {
	const {removeFromCart} = useContext(AppContext);

	const handleRemove = product => {
		removeFromCart(product);
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.tile} />
			</figure>
			<p>{product.title}</p>
			<p>$ {product.price}</p>
			<p className='close' onClick={()=> handleRemove(product) } > X </p>
			
		</div>
	);
}

export default OrderItem;