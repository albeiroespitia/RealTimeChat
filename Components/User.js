import React from 'react';
import render from 'react-dom';


export default class User extends React.Component{
	render(){
		return <div id={this.props.id} className="login">
			<h2> {this.props.text} </h2>
		</div>
	}
}