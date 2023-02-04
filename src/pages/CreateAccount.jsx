import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CreateAccount.scss';
import Arrow from '../assets/icons/Arrow';

const CreateAccount = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			name: formData.get('name'),
			usename: formData.get('email'),
			password: formData.get('password')
		}
		var user = JSON.parse(localStorage.getItem('usuario'));
		user = data;
		localStorage.setItem('usuario', JSON.stringify(user));
    }

	return (
		<div className="CreateAccount">
			<div className="CreateAccount-container">
				<div className="title-container">
					<Link to={'/'} >
						<>
							<Arrow className="arrow" />
							<p>Home</p>
						</>
					</Link>
					
				</div>
				<h1 className="title">My account</h1>
				<form action="/" className="form" ref={form}>
					<div>
						<label for="name" className="label">Name</label>
						<input type="text" name="name" placeholder="Jhon Graham" className="input input-name" />
						<label for="email" className="label">Email</label>
						<input type="text" name="email" placeholder="username@miapp.jnk" className="input input-email" />
						<label for="password" className="label">Password</label>
						<input type="password" name="password" placeholder="*********" className="input input-password" />
					</div>
					
					<button
						onClick={handleSubmit}
						className="primary-button login-button">
						<Link to={'/'} >
						  Create
						</Link>
					</button>
					
			
				</form>
			</div>
		</div>
	);
}

export default CreateAccount;