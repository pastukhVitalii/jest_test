import {GovernmentBuildingType, HouseType} from "./02";

export let getStreetTitlesGovernmentbuidings = (governmentBuildings: Array<GovernmentBuildingType>) => {
    return governmentBuildings.map(b => {
        return b.address.street.title
    })
}

export let getStreetTitlesHouses = (houses: Array<HouseType>) => {
    return houses.map(b => b.address.street.title);
}

export let createMessages = (houses: Array<HouseType>) => {
    return houses.map(h => `Hello guys from ${h.address.street.title}`);
}

