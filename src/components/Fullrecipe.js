import React from 'react';
import {Link} from 'react-router-dom';

const Recip = ({url, title,calories,image, ingredients}) => {
	const uri = encodeURIComponent(url);
	return(
		<div className="recipe">
			<h1>{title}</h1>
			<ul>
				{ingredients.map(ingred =>(
					<li>{ingred.text}</li>
				))}
			</ul>
			<p>{calories} calories</p>

			<img src={image} alt=""/>
		</div>
		);
}

export default Recip;