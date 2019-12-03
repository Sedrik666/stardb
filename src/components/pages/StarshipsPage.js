import React, { Component } from 'react';

import Row from "../Row";
import ErrorBoundary from "../ErrorBoundary";
import {StarshipDetails, StarshipList} from "../SWComponents";

export default class StarshipsPage extends Component{
    state={
        selectedItem: null,
    };

    onItemSelected = (id) => {
        this.setState({selectedItem: id})
    };

    render(){
        return(
            <ErrorBoundary>
                <Row left={<StarshipList onItemSelected={this.onItemSelected}/>}
                     right={<StarshipDetails itemId={this.state.selectedItem}/>}
                />
            </ErrorBoundary>
        );
    }
};