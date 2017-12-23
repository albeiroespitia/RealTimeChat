import React from 'react';
import render from 'react-dom';
import { Link } from 'react-router-dom';


export default class Header extends React.Component{
	render(){
		return (
		<div>
			<div className="header"> 
				<a href="https://nodejs.org/es/"><img className="node-logo" src="./img/1.png"/></a> 
				<Link to='/'><h3> Real Time Chat </h3></Link>
				<a href="https://facebook.github.io/react/"><img className="react-logo" src="./img/2.png"/></a>
			</div>
        </div>
        );
	}


}