import React, { Component } from 'react';

import './PeoplePage.css';
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import ErrorIndicator from "../ErrorIndicator";
import SwapiService from "../../services/SwapiService";

const Row = ({left, right}) => {
    return(
        <div className='row mb2'>
            <div className="col-md-6">
                {left}
            </div>
            <div className="col-md-6">
                {right}
            </div>
        </div>
    );
};

class ErrorBoundary extends Component{
    state = {
        hasError: false,
    };

    componentDidCatch() {
        this.setState({hasError: true})
    }

    render(){
        if(this.state.hasError){
            return <ErrorIndicator/>
        }
        return this.props.children
    }
}

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