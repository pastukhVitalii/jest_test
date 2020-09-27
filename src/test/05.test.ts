import {CityType} from "./02";
import {createMessages, getStreetTitlesGovernmentbuidings, getStreetTitlesHouses} from "./05";

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New york',
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street'
                    }
                }
            }, {
                id: 2,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street'
                    }
                }
            }, {
                id: 3,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Black street'
                    }
                }
            }],
        governmentBuildings: [
            {
                type: 'Hospital',
                budget: 200000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'Long Str'
                    }
                }
            }, {
                type: 'Hospital',
                budget: 400000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            }],
        citizensNumber: 1000000
    }
})

test('lists of street titles of government buildings', () => {
    let streetNames = getStreetTitlesGovernmentbuidings(city.governmentBuildings);

    expect(city.governmentBuildings.length).toBe(2);
    expect(city.governmentBuildings[0].address.street.title).toBe('Long Str');
    expect(city.governmentBuildings[1].address.street.title).toBe('Central Str');
})

test('lists of street titles', () => {
    let streetNames = getStreetTitlesHouses(city.houses);

    expect(city.houses.length).toBe(3);
    expect(city.houses[0].address.street.title).toBe('White street');
    expect(city.houses[2].address.street.title).toBe('Black street');
    expect(city.houses[2].address.street).toStrictEqual({title: 'Black street'});
})

test('create creating messages for streets', () => {
    let messages = createMessages(city.houses);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello guys from White street');
    expect(messages[2]).toBe('Hello guys from Black street');
})