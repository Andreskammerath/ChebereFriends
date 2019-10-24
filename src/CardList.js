import React from 'react';
import Card from "./Card";

const CardList = ({friends}) => {
	const cardsArray = friends.map((user,i) => {
		return <Card key={friends[i].id} id={friends[i].id} name={friends[i].name} email={friends[i].email}/> 
	})
	return (
		<div>
			{cardsArray}
		</div>
	);
}

export default CardList;