import React from 'react';
import render from 'react-dom';
import $ from 'jquery';

export default class Form extends React.Component{

	dataSend(){
		var values = [];
		$('.datos').each(function() {
    		values.push($(this).val());
		});
		this.props.values(values);
	}

	render(){
		return <section className={this.props.clase}>
			<h2> {this.props.type} </h2>
			<form method="POST" onSubmit={this.props.submit}>
				{
					this.props.inputs.map((input)=>{
						return <input required type={input.type} className="datos" placeholder={input.placeholder}/>
					})
				}
			<h4 className="error-message"> Usuario o Contraseña Incorrecto </h4>
			<input type="submit" id="button-submit" value="Enviar" onClick={this.dataSend.bind(this)} />
			</form>
		</section>
	}
} 