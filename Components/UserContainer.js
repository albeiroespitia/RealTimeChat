import React from 'react';
import render from 'react-dom';
import User from './User';
import { Link } from 'react-router-dom';

export default class UserContainer extends React.Component{
	render(){
		return <section className="loginContainer">
			<Link to='/login'><User id="sign-in" text="Inicia Sesion"/></Link>
			<Link to='/register'><User id="sign-up" text="Registrate"/></Link>
		</section>

	}
}