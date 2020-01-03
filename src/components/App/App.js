import React, {Component} from 'react';

import Header from '../Header';
import ErrorBoundary from "../ErrorBoundary";
import RandomPlanet from "../RandomPlanet";
import {PeoplePage, PlanetsPage, StarshipsPage, SecretPage, LoginPage} from '../pages'

import {SwapiServiceProvider} from '../SwapiServiceContext'
import SwapiService from "../../services/SwapiService";
import DummySwapiService from "../../services/DummySwapiService";
import StarshipDetails from "../SWComponents/StarshipDetails"

import  {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css'

export default class App extends Component {
    state = {
        isLoggedIn: false,
        hasError: false,
        swapiService: new SwapiService(),
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
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
        const {isLoggedIn} = this.state;
        return(
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header onServiceChange={this.onServiceChange}/>
                            <RandomPlanet/>
                            <Route path={'/'}
                                   render={() => <h2>Welcome to StarDB</h2>}
                                   exact
                            />
                            <Route path={'/people/:id?'} exact component={PeoplePage}/>
                            <Route path={'/planets'} component={PlanetsPage}/>
                            <Route path={'/starships'} exact component={StarshipsPage}/>
                            <Route path={'/starships/:id'}
                                   render={({match}) => {
                                       const {id} = match.params;
                                       return <StarshipDetails itemId={id}/>
                                   }}
                            />
                            <Route path={'/login'} render={() => (
                                <LoginPage isLogged={isLoggedIn}
                                           onLogin={this.onLogin}
                                />
                            )}/>
                            <Route path={'/secret'} render={() => (
                                <SecretPage isLogged={isLoggedIn}/>
                            )}/>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
};
















