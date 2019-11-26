import React, {Component} from 'react';
import Header from '../Header';
import ItemList from '../ItemList';
import RandomPlanet from '../RandomPlanet';
import PersonDetails from '../PersonDetails';

import './App.css'

export default class App extends Component {
    state = {
        selectedPerson: 5,
    };

    onPersonSelected = (id) => {
        this.setState({selectedPerson: id})
    };
    render(){
        return(
            <div>
                <Header/>
                <RandomPlanet />
                <div className='row mb2'>
                    <div className="col-md-6">
                        <ItemList onItemSelected = {this.onPersonSelected}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        );
    }
};