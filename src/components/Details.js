import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Recip from './Fullrecipe';
import '../App.css';

function Details({match}){
    const APP_ID = "417098eb";
    const APP_KEY = "58dd6a0ba51344efd36f957269770d71";
    
    const [recipe, setRecipe] = useState({
    	ingredients: []
    });

    const url = `https://api.edamam.com/search?r=${match.params.id}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    useEffect(() => {
        getRecipe();
    }, []);

    const getRecipe = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setRecipe(data[0]);
        console.log(data[0])
    }

    return(
        <div className="home">
            <div className="">
            	<Link to="/">Home</Link>
            	<Recip key={recipe.label} url={recipe.uri} title={recipe.label} calories={recipe.calories} image={recipe.image} ingredients={recipe.ingredients}/>

            </div>
        </div>
    );
}

export default Details;
