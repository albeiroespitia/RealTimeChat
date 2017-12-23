import React from 'react';
import render from 'react-dom';
import { BrowserRouter, Route, IndexRoute, Redirect } from 'react-router-dom';
import IndexComponentContainer from '../Components/FullSiteComponents/IndexComponentContainer';
import RegisterComponentContainer from '../Components/FullSiteComponents/RegisterComponentContainer';
import LoginComponentContainer from '../Components/FullSiteComponents/LoginComponentContainer';
import ChatComponentContainer from '../Components/FullSiteComponents/ChatComponentContainer';





export default class Rutas extends React.Component{
	render(){
		return(
			<BrowserRouter>
				<div>
        			<Route exact path="/" component={IndexComponentContainer}/>
        			<Route path="/register" component={RegisterComponentContainer}/>
        			<Route path="/login"  component={LoginComponentContainer}/>
        			<Route path="/chat" component={ChatComponentContainer}/>
        			
        		</div>
    		</BrowserRouter>
		);
	}
};