import React, {Component} from 'react';

import Header from '../Header';
import ErrorBoundary from "../ErrorBoundary";
import RandomPlanet from "../RandomPlanet";
import {PeoplePage, PlanetsPage, StarshipsPage} from '../pages'

import {SwapiServiceProvider} from '../SwapiServiceContext'
import SwapiService from "../../services/SwapiService";
import DummySwapiService from "../../services/DummySwapiService";

import './App.css'

export default class App extends Component {
    state={
        hasError: false,
        swapiService: new SwapiService(),
    };

    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService? DummySwapiService: SwapiService;
            return {
                swapiService: new Service()
            };
        })
    };

    render(){
        return(
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange}/>
                        <RandomPlanet/>
                        <PeoplePage/>
                        <PlanetsPage/>
                        <StarshipsPage/>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
};
















