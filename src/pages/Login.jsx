import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Arrow from '../assets/icons/Arrow';
import '../styles/Login.scss';

const Login = () => {
	const[controler, setControler] = useState(null);
    
	const controUser = () =>{
		const loginMail  = document.getElementById("email");
		const loginPassword = document.getElementById("password");

		var lsUD = [];
		const userDate = JSON.parse(localStorage.getItem('usuario'));
		if (userDate === "Create account") {
			setControler(0);
		} else {
			lsUD = userDate;
			if(lsUD.usename === loginMail.value && lsUD.password === loginPassword.value) {
				setControler(1);
			} else {
				setControler(2);
			}
		}
		console.log('usuario o contraseñas incorrectos');
	}

	const deleteLS = () => {
		localStorage.clear();
     	//location.reload();
	}

    return (
		<div className="login-log">
			<div className="Login-container">
				<div className="title-container">
					<Link to={'/'} >
						<>
							<Arrow className="arrow" />
							<p>Home</p>
						</>
					</Link>
					
				</div>
				<form  className="form-container" >
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" id="email" placeholder="platzi@example.cm" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" id="password" placeholder="*********" className="input input-password" />
					
				</form>
				<button
					onClick={controUser}
					className="primary-button login-button">
					Log in
				</button>
				<a href="/signup">Forgot my password</a>
				{(controler === 0) && 
					<p>You are not a user. Create a new account</p>

				}
				{(controler === 1) && 
					<a href="/">Welcome go to home</a>
				}
				{(controler === 2) && 
					<p>Wrong username or password, please try again </p>
				}
				<button
					onClick={deleteLS}
					className="secondary-button signup-button"
				>
					Sign up
				</button>
			</div>
		</div >
	);
}

export default Login;