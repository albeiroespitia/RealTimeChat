import React from 'react';
import render from 'react-dom';
import Form from '../Form';
import { withRouter } from 'react-router';
import Header from '../Header';
import $ from 'jquery';

export default class RegisterComponentContainer extends React.Component{
	constructor(props){
		super(props);
		this.state = {inputs : [
			{
				"placeholder" : "Nombre Completo",
				"type" : "text"
			},
			{
				"placeholder" : "Contraseña",
				"type" : "text"
			},
			{
				"placeholder" : "Correo",
				"type" : "email"
			},
			{
				"placeholder" : "Telefono",
				"type" : "number"
			},
			{
				"placeholder" : "Nombre de Usuario",
				"type" : "text"
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
		  url: '/register',
		  data: {values: this.state.values},
		  success: (data,textStatus,xhr)=>{
		  	if(xhr.status == 200){
			  	alert('Registrado Satisfactoriamente, sera redireccionado a la pagina principal en breve');
			  	this.props.history.push('/');
		  	} 
		  }
		});
	}

	render(){
		return <section>
			<Header/>
			<Form type="Registrate" clase="register-form" inputs={this.state.inputs}
			 values={this.inputValues.bind(this)} submit={this.sendToServer.bind(this)}/>
		</section>
				
	}
};