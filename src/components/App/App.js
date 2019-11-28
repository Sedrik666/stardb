import React, {Component} from 'react';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';

import './App.css'
import ErrorBoundary from "../ErrorBoundary";
import SwapiService from "../../services/SwapiService";
import ItemDetails, {Record} from "../ItemDetails/ItemDetails";
import ItemList from "../ItemList/ItemList";
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
        const { getAllPeople, getPerson, getPersonImage, getAllStarships,getStarship, getStarshipImage } = this.swapiService;

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;


        const personDetails = (
            <ItemDetails
                itemId={3}
                getData={getPerson}
                getImageUrl={getPersonImage}
            >
                <Record field = "gender" label = "Gender" />
                <Record field = "eyeColor" label = "Eye Color"/>
            </ItemDetails>
        );

        const starshipnDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage}
            >
                <Record field = "model" label = "Model" />
                <Record field = "length" label = "Length"/>
                <Record field = "costInCredits" label = "Cost"/>
            </ItemDetails>
        );


        return(
            <ErrorBoundary>
                <div className="stardb-app">
                    <Header/>
                    {/*<Row left={personDetails}
                         right={starshipnDetails}
                    />*/}
                    <ItemList
                        getData={getAllPeople}
                        onItemSelected={() => {}}
                    >
                        { ({name}) => <span>{name}</span> }
                    </ItemList>
                    <ItemList
                        getData={getAllStarships}
                        onItemSelected={() => {}}
                    >
                        { ({name}) => <span>{name}</span> }
                    </ItemList>
                </div>
            </ErrorBoundary>
        );
    }
};
















