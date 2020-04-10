import React from 'react';
import {Link} from 'react-router-dom';

const Recipe = ({url, title,calories,image, ingredients}) => {
	const uri = encodeURIComponent(url);
	return(
		<div className="recipe">
			<h1>{title}</h1>
			<Link to={`/recipe/${uri}`}>View recipe</Link>
			<img src={image} alt=""/>
		</div>
	);
}

export default Recipe;

// <ul>
				
			// </ul>
						//<p>{calories} calories</p>
