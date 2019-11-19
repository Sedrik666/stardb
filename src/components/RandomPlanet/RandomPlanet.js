import React, {Component, Fragment} from 'react';
import SwapiService from "../../services/SwapiService";
import './RandomPlanet.css';
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

export default class RandomPlanet extends Component{
    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false,
    };

    constructor(){
        super();
        this.updatePlanet();
        this.interval = setInterval(() =>{this.updatePlanet()}, 3000);
    }

    onPlanetLoaded = (planet) =>{
        this.setState({
            planet,
            loading: false,
        });
    };


    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 3;
        this.swapiService
            .getPlanet(id)
            .then((planet) => {this.onPlanetLoaded(planet)})
            .catch((error) => {this.onError(error)})
    };

    render() {
        const{ planet, loading, error} = this.state;
        return(
            <div className="random-planet jumbotron rounded">
            {
                error?
                <ErrorIndicator/>:
                loading?
                <Spinner/>:
                <PlanetView planet={planet}/>
            }
            </div>
        )
    }
};

const PlanetView = ({planet}) => {
    const{ id, name, population, rotationPeriod , diameter } = planet;
    return(
        <Fragment>
            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                 alt={name}
            />
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
              </div>
        </Fragment>
    );
}