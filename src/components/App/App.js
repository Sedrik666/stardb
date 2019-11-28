import React, {Component} from 'react';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';

import './App.css'
import PeoplePage from "../PeoplePage";
import ErrorButton from "../ErrorButton";
import ErrorBoundary from "../ErrorBoundary";
import SwapiService from "../../services/SwapiService";
import ItemDetails from "../ItemDetails";
import Row from "../Row";

export default class App extends Component {
    swapiService = new SwapiService();

    state={
        showRandomPlanet: true,
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
        const { getPerson, getPersonImage, getStarship, getStarshipImage } = this.swapiService;

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;
        const personDetails = (
            <ItemDetails
                itemId={3}
                getData={getPerson}
                getImageUrl={getPersonImage}
            />
        );

        const starshipnDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage}
            />
        );


        return(
            <ErrorBoundary>
                <div className="stardb-app">
                    <Header/>
                    <Row left={personDetails}
                         right={starshipnDetails}
                    />
                </div>
            </ErrorBoundary>
        );
    }
};
















