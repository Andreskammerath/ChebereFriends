import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import {robots} from './robots';
const App = () => {

  return (
    <div className="tc">
        <h1>Chebere friends</h1>
        <SearchBox />
        <CardList robots={robots}/>
    </div>    
  );  
}

export default App;
