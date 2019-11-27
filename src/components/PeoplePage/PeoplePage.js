import React, { Component } from 'react';

import './PeoplePage.css';
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import ErrorBoundary from "../ErrorBoundary";
import SwapiService from "../../services/SwapiService";
import Row from "../Row";



export default class PeoplePage extends Component{
    swapiService = new SwapiService();

    state={
        selectedPerson: 3,
    };

    onPersonSelected = (id) => {
        this.setState({selectedPerson: id})
    };

    render(){
        const itemList = (
            <ItemList onItemSelected = {this.onPersonSelected}
                      getData = { this.swapiService.getAllPeople}
            >
                {(item) => (
                    `${item.name} (${item.birthYear})`
                )}
            </ItemList>
        );

        const personDetails = (
            <ErrorBoundary>
                <PersonDetails personId={this.state.selectedPerson}/>
            </ErrorBoundary>
        );

        return(
            <ErrorBoundary>
                <Row left = {itemList}
                     right = {personDetails}
                />
            </ErrorBoundary>
        );
    }
};