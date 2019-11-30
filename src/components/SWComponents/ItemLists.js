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


const PersonList = WithData(ItemList, getAllPeople);

const PlanetList = WithData(ItemList, getAllPlanets);

const StarshipList = WithData(ItemList, getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList,
};