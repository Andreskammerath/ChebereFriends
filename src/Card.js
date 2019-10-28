import React from 'react';

const Card = (props) => {
	return (
		<div className="tc back-color-cards dib br3 pa2 ma2 grow bw2 shadow-5">
			<img alt= "robots" src={`https://robohash.org/set_set5/bgset_bg1/${props.id}?size=300x300`}/>
			<div>
				<h3>{props.name}</h3>
				<p>{props.email}</p>
			</div>	
		</div>
	);
}

export default Card;
