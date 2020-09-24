import {CityType} from "./02";

export let demolishHouseOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(h => h.address.street.title !== street);
}