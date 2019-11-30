import React, {Component} from 'react';
import Header from '../Header';
//import RandomPlanet from '../RandomPlanet';

import './App.css'
import ErrorBoundary from "../ErrorBoundary";
import SwapiService from "../../services/SwapiService";
import ItemDetails, {Record} from "../ItemDetails/ItemDetails";
import Row from "../Row";
import {
    PersonList, //PlanetList, StarshipList,
    PersonDetails, //PlanetDetails, StarshipDetails
} from '../SWComponents';

export default class App extends Component {
    swapiService = new SwapiService();

    state={
        showRandomPlanet: true,
        selectedPerson: 3,
        hasError: false,
    };

    /*toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };*/

    render(){
        const {  getPerson, getPersonImage/*, getAllStarships, getStarship, getStarshipImage*/ } = this.swapiService;

       /* const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;*/


        const personDetails = (
            <PersonDetails itemId={11}/>
        );

       /* const starshipnDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage}
            >
                <Record field = "model" label = "Model" />
                <Record field = "length" label = "Length"/>
                <Record field = "costInCredits" label = "Cost"/>
            </ItemDetails>
        );*/


        return(
            <ErrorBoundary>
                <div className="stardb-app">
                    <Header/>
                    <Row left={<PersonList/>}
                         right={personDetails}
                    />
                </div>
            </ErrorBoundary>
        );
    }
};
















