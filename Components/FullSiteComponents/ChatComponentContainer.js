import React from 'react';
import render from 'react-dom';
import { Redirect } from 'react-router-dom';
import Header from '../Header';
import Chat from '../Chat';

export default class ChatComponentContainer extends React.Component{
	render(){
		if(this.props.location.state == undefined){
			return <Redirect to="/login"/>
		}else{
			return <section>
				<Header/>
				<Chat name={this.props.location.state.Nombre}/>
				<div id="snackbar">Porfavor escribe un mensaje</div>
			</section>	
		}
		
				
	}
};