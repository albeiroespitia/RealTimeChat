import React from 'react';
import render from 'react-dom';
import $ from 'jquery';
import io from 'socket.io-client';
import MessagesList from './MessagesList';


export default class Chat extends React.Component{
	constructor(props){
		super(props);
		this.state = {messages : []};
	}

	onClick(){
		let mensaje;
		if(document.getElementById('write').value.trim().length){
			mensaje = { mensaje: document.getElementById('write').value, usuario : this.props.name };	
			this.socket.emit('message',mensaje);
		}else{
			var x = document.getElementById("snackbar")
		    x.className = "show";
		    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
		}
	}

	componentWillMount(){
		this.socket = io('http://localhost:3000');
		this.socket.on('message',(message)=>{
			this.newMessage(message);
		});
	}

	newMessage(message){
		this.state.messages.push(message);
		let messages = this.state.messages;
		this.setState({messages:messages});
		document.getElementById('write').value = "";
	}

	eventHandler(event){
		if(event.key == 'Enter'){
            document.getElementById('send-message').click();
         }
	}

	render(){
		return <section className="box-chat">
			<div className="messages">
				<MessagesList name={this.props.name} newMessages={this.state.messages}/>
			</div>
			<input onKeyPress={this.eventHandler}  placeholder={"Hola, "+this.props.name+". Escribe algo"} className="write" id="write" type="text"/>
			<button onClick={this.onClick.bind(this)} className="send-message" id="send-message"> Enviar </button>
		</section>
	}

}