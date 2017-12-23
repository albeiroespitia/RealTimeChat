import React from 'react';
import render from 'react-dom';
import Message from './Message';

export default class MessagesList extends React.Component{
	render(){
		return <ul className="messages-box">
			{
				this.props.newMessages.map((message)=>{
					return <Message name={message.usuario} newMessages={message.mensaje}/>
				})
			}
			
		</ul>
	}
}