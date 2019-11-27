import React, {Component} from 'react';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';

import './App.css'
import PeoplePage from "../PeoplePage";
import ErrorButton from "../ErrorButton";
import ErrorBoundary from "../ErrorBoundary";
import SwapiService from "../../services/SwapiService";

export default class App extends Component {
    swapiService = new SwapiService();

    state={
        selectedPerson: 3,
        hasError: false,
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    render(){
        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;

        return(
            <ErrorBoundary>
                <div className="stardb-app">
                    <Header/>
                    { planet }
                    <div className="row mb2 button-row">
                        <button
                            className="toggle-planet btn btn-warning btn-lg"
                            onClick={this.toggleRandomPlanet}>
                            Toggle Random Planet
                        </button>
                        <ErrorButton />
                    </div>
                    <PeoplePage/>
                </div>
            </ErrorBoundary>
        );
    }
};