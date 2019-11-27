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
}

export default class PeoplePage extends Component{
    swapiService = new SwapiService();

    state={
        selectedPerson: 3,
        hasError: false,
    };

    componentDidCatch() {
        this.setState({hasError: true})
    }

    onPersonSelected = (id) => {
        this.setState({selectedPerson: id})
    };

    render(){
        if(this.state.hasError){
            return <ErrorIndicator/>
        }
        const itemList = (
            <ItemList onItemSelected = {this.onPersonSelected}
                      getData = { this.swapiService.getAllPeople}
                      renderItem = {({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`}
            />
        );

        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson}/>
        );

        return(
            <Row left = {itemList}
                 right = {personDetails}
            />
        );
    }
};