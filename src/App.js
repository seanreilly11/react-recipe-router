import React from 'react';
import Home from './components/Home';
import Details from './components/Details';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

function App(){
    return(
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/recipe/:id" component={Details}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;