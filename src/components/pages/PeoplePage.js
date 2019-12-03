import React, { Component } from 'react';

import {PersonDetails, PersonList} from "../SWComponents";
import Row from "../Row";
import ErrorBoundary from "../ErrorBoundary";

import './PeoplePage.css';

export default class PeoplePage extends Component{
    state={
        selectedItem: null,
    };

    onItemSelected = (id) => {
        this.setState({selectedItem: id})
    };

    render(){
        return(
            <ErrorBoundary>
                <Row left={<PersonList onItemSelected={this.onItemSelected}/>}
                     right={<PersonDetails itemId={this.state.selectedItem}/>}
                />
            </ErrorBoundary>
        );
    }
};