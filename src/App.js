import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from './Scroll'
class App extends React.Component{
	constructor(){
		super();
		this.state = {
			friends: [],
			searchfield:''
		}
	}
	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response =>{ return response.json();})
		.then(users => {this.setState({friends: users})});
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
	        	<Scroll>
	        		<CardList friends={filteredfriends}/>
	        	</Scroll>
	    	</div>    
	  	);
	}  
}

export default App;
