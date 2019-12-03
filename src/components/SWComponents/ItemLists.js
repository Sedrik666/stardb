import React from 'react';
import ItemList from "../ItemList/ItemList";
import { WithData, WithSwapiService, WithChildFunction, Compose} from "../HocHelpers";

const renderName = ({name}) => <span>{name}</span>;
const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>;
const mapPersonMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getAllPeople
    }
};
const mapPlanetMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getAllPlanets
    }
};
const mapStarshipMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getAllStarships
    }
};

const PersonList = Compose(
    WithSwapiService(mapPersonMethodsToProps),
    WithData,
    WithChildFunction(renderName)
)(ItemList);

const PlanetList = Compose(
    WithSwapiService(mapPlanetMethodsToProps),
    WithData,
    WithChildFunction(renderName)
)(ItemList);

const StarshipList = Compose(
    WithSwapiService(mapStarshipMethodsToProps),
    WithData,
    WithChildFunction(renderModelAndName)
)(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList,
};