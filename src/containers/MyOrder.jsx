import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import Arrow from '../assets/icons/Arrow';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';
import '../styles/MyOrder.scss';

const MyOrder = () => {
	const { state } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className="MyOrder">
			<div className='orders_continer' >
				<div className="title-container">
					<Link to={'/'} >
						<>
							<Arrow className="arrow" />
							<p>Home</p>
						</>
					</Link>
					
				</div>
				<p className="title">My order</p>
				<div className="my-order-content">
					{state.cart.map(product => (
						<OrderItem product={product} key={`orderItem-${product.id}`} />
					))}
					<div className="order">
						<p>
							<span>Total</span>
						</p>
						<p>${sumTotal()}</p>
					</div>
					<button className="primary-button">
						Checkout
					</button>
				</div>
			</div>
		</aside>
	);
}

export default MyOrder;