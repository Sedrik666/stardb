import React, {Component}from 'react';
import Header from '../Header';
import ItemList from '../ItemList';
import RandomPlanet from '../RandomPlanet';
import PersonDetails from '../PersonDetails';

import './App.css'

const App = () => {
    return(
        <div>
            <Header/>
            <RandomPlanet />
            <div className='row mb2'>
                <div className="col-md-6">
                    <ItemList />
                </div>
                <div className="col-md-6">
                    <PersonDetails />
                </div>
            </div>
        </div>
    );
};

export default App;