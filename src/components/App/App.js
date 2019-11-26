import React, {Component} from 'react';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';

import './App.css'
import PeoplePage from "../PeoplePage";

export default class App extends Component {
    render(){
        return(
            <div>
                <Header/>
                <RandomPlanet />
                <PeoplePage/>
                <PeoplePage/>
                <PeoplePage/>
            </div>
        );
    }
};