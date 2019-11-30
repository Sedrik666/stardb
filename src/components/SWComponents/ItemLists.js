import React from 'react';
import ItemList from "../ItemList/ItemList";
import { WithData} from "../HocHelpers";
import SwapiService from "../../services/SwapiService";

const swapiService = new SwapiService();
const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped>
                {fn}
            </Wrapped>
        )
    }
};

const renderName = ({name}) => <span>{name}</span>;
const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>;

const PersonList = WithData(
    withChildFunction(ItemList, renderName),
    getAllPeople);
const PlanetList = WithData(
    withChildFunction(ItemList, renderName),
    getAllPlanets);
const StarshipList = WithData(
    withChildFunction(ItemList, renderModelAndName),
    getAllStarships);



export {
    PersonList,
    PlanetList,
    StarshipList,
};