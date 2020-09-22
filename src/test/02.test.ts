import {CityType} from "./02";

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New york',
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street'
                    }
                }
            }, {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street'
                    }
                }
            }, {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street'
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
                        title: 'Central Str'
                    }
                }
            }, {
                type: 'Hospital',
                budget: 200000,
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

test('test city should contains 3 houses', () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe('White street');

})

test('test city should contains hospital and fire station', () => {
    expect(city.governmentBuildings.length).toBe(2);

    expect(city.governmentBuildings[0].type).toBe('Hospital');
    expect(city.governmentBuildings[0].budget).toBe(200000);
    expect(city.governmentBuildings[0].staffCount).toBe(1000);
    expect(city.governmentBuildings[0].address.street.title).toBe('Central Str');
})