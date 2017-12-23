import React from 'react';
import render from 'react-dom';
import Form from '../Form';
import Header from '../Header';
import { withRouter } from 'react-router';
import $ from 'jquery';

export default class LoginComponentContainer extends React.Component{
	constructor(props){
		super(props);
		this.state = {inputs : [
			{
				"placeholder" : "Usuario",
				"type" : "text"
			},
			{
				"placeholder" : "Contraseña",
				"type" : "password"
			}
		]};
	}

	getInitialState(){
		return {values : ''};
	}

	inputValues(val){
		this.setState({ values: val });
	}

	sendToServer(event){
		event.preventDefault();
		$.ajax({
		  type: "POST",
		  url: '/login',
		  data: {values: this.state.values},
		  success: (data,textStatus,xhr)=>{
		  	if(data.ok == 'yes'){
		  		this.ok = 1;
			   	this.props.history.push('/chat',data.datos);
		  	}else{
		  		this.ok = 0;
		  		$('.error-message').css('display','block');
		  	}
		  },
		  error : (xhr, ajaxOptions, thrownError)=>{
		  	
		  }
		});
	}


	render(){
		return <section>
			<Header/>
			<Form type="Accede" clase="login-form" inputs={this.state.inputs}
			values={this.inputValues.bind(this)} submit={this.sendToServer.bind(this)}/>
		</section>
				
	}
};