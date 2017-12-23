import React from 'react';
import render from 'react-dom';

export default class Message extends React.Component{
	render(){
		return <li className="message">
			<span className="usuario">{this.props.name+' : '}</span>
			{this.props.newMessages} 
		</li>
	}
}



			