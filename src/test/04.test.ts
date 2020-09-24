import {CityType} from "./02";
import {demolishHouseOnTheStreet} from "./04";

test('should take man older then 50', () => {
    const ages = [18, 40, 55, 90, 16, 27];

    /*const predicat = (age: number) => age > 50;
    const oldAges = ages.filter(predicat);*/

    const oldAges = ages.filter(age => age > 50);

    expect(oldAges.length).toBe(2);
})

test('get only completed tasks', () => {
    const tasks = [
        {id: 1, title: 'Oil', isDone: true},
        {id: 2, title: 'Milk', isDone: false},
        {id: 3, title: 'Sugar', isDone: false},
        {id: 4, title: 'Bread', isDone: true}
    ]

    const completedTasks = tasks.filter(task => task.isDone);

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(1);
    expect(completedTasks[1].id).toBe(4);
})

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
                        title: 'Central Str'
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

test('Houses should be destroyed', () => {
    demolishHouseOnTheStreet(city, 'White street');

    expect(city.houses.length).toBe(2);
    expect(city.houses[0].id).toBe(1);
})