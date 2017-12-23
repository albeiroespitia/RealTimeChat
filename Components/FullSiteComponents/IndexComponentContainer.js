import React from 'react';
import render from 'react-dom';
import UserContainer from '../UserContainer';
import Header from '../Header';

export default class IndexComponentContainer extends React.Component{
	render(){
		return <section>
			<Header/>
			<UserContainer/>
		</section>
				
	}
};