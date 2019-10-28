import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import {friends} from './friends';
class App extends React.Component{
	constructor(){
		super();
		this.state = {
			friends: friends,
			searchfield:''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}
	render(){	 
		const filteredfriends = this.state.friends.filter(friend =>
			friend.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) );
		return (
	    	<div className="tc">
	        	<h1 className="MarioF f1">Chebere friends</h1>
	        	<SearchBox searchChange={this.onSearchChange}/>
	        	<CardList friends={filteredfriends}/>
	    	</div>    
	  	);
	}  
}

export default App;
