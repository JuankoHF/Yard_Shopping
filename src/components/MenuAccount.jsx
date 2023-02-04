import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Menu.scss';


const MenuAccount = () => {

	const userDate = JSON.parse(localStorage.getItem('usuario'));
	var forIf = userDate;
	if (forIf !== "Create account") {
		
		return (
			<div className="Menu">
				<ul>
					<li>
						<Link to={'/orders'}>
							My orders
						</Link>
					</li>
					<li>
						<Link to={'/account'}>
							My account
						</Link>
					</li>
					<li>
						<Link to={'/login'}>
							Sign out
						</Link>
					</li>
				</ul>
			</div>
		);
	} else {

		return (
			<div className="Menu">
				<ul>
					<li>
						<Link to={'/orders'}>
							My orders
						</Link>
					</li>
					<li>
						<Link to={'/signup'}>
							Create account
						</Link>
					</li>
					<li>
						<Link to={'/new-password'}>
							recover password
						</Link>
					</li>
				</ul>
			</div>
		);
	}
	
	
}

export default MenuAccount;


