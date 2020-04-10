import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Recipe from './Recipe';
import '../App.css';

function Home(){
    const APP_ID = "417098eb";
    const APP_KEY = "58dd6a0ba51344efd36f957269770d71";
    
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;


    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits)
    }

    const updateSearch = e => {
        setSearch(e.target.value)
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("")
    }

    return(
        <div className="home">
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="search" value={search} onChange={updateSearch}/>
                <button className="search-button" type="submit">Search</button>
            </form>
            <div className="recipes">
                <Link to="/recipe">Details</Link> 
                {recipes.map(recipe => (
                    <Recipe key={recipe.recipe.label} url={recipe.recipe.uri} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>
                ))}
            </div>
        </div>
    );
}

export default Home;