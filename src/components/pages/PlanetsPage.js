import React, { Component } from 'react';

import {PlanetDetails, PlanetList} from "../SWComponents";
import Row from "../Row";
import ErrorBoundary from "../ErrorBoundary";

import './PeoplePage.css';

export default class PlanetsPage extends Component{
    state={
        selectedItem: null,
    };

    onItemSelected = (id) => {
        this.setState({selectedItem: id})
    };

    render(){
        return(
            <ErrorBoundary>
                <Row left={<PlanetList onItemSelected={this.onItemSelected}/>}
                     right={<PlanetDetails itemId={this.state.selectedItem}/>}
                />
            </ErrorBoundary>
        );
    }
};