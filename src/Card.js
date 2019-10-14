import React from 'react';

const Card = (props) => {
	return (
		<div className="tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5">
			<img alt= "robots" src={`https://robohash.org/set_set3/bgset_bg1/${props.id}?size=200x200`}/>
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</div>	
		</div>
	);
}

export default Card;
