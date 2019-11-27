import React, {Component} from 'react';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';

import './App.css'
import PeoplePage from "../PeoplePage";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import SwapiService from "../../services/SwapiService";

export default class App extends Component {
    swapiService = new SwapiService();

    state={
        selectedPerson: 3,
        hasError: false,
    };

    render(){
        return(
            <div>
                <Header/>
                <RandomPlanet />
                <PeoplePage/>
                <div className='row mb2'>
                    <div className="col-md-6">
                        <ItemList onItemSelected = {this.onPersonSelected}
                                  getData = { this.swapiService.getAllPlanets}
                        />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
                <div className='row mb2'>
                    <div className="col-md-6">
                        <ItemList onItemSelected = {this.onPersonSelected}
                                  getData = { this.swapiService.getAllStarships}
                        />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        );
    }
};