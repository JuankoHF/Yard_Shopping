import React from 'react';
import { Link } from 'react-router-dom';
import Arrow from '../assets/icons/Arrow';
import '../styles/MyAccount.scss';

const MyAccount = () => {

	const userDateAccount = JSON.parse(localStorage.getItem('usuario'));
	var persone = userDateAccount;

	return (
		<div className="MyAccount">
			<div className="MyAccount-container">
				<div className="title-container">
					<Link to={'/'} >
						<>
							<Arrow className="arrow" />
							<p>Home</p>
						</>
					</Link>
				</div>
				<h1 className="title">My account</h1>
				<form action="/" className="form">
					<div>
						<label for="name" className="label">Name</label>
						<p className="value">{persone.name}</p>
						<label for="email" className="label">Email</label>
						<p className="value">{persone.usename}</p>
						<label for="password" className="label">Password</label>
						<p className="value">*********</p>
					</div>
					<button
						className="secondary-button login-button" 
					>
						<Link to={'/'} >
						  	Edit
						</Link>
					</button>
			
				</form>
			</div>
		</div>
	);
}

export default MyAccount;