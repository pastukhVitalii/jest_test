import {
    makeStudentActive,
    addSkill,
    StudentType,
    doesStudentLiveIn,
    addMoneyToBudget,
    repairHouse,
    toHireStaff
} from "./03";
import {CityType} from "./02";

let student: StudentType

beforeEach( () => {
    student = {
        id: 1,
        name: 'Vitaliy',
        age: 27,
        city: 'Lviv',
        isActive: false,
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'React'
            },
            {
                id: 3,
                title: 'JS'
            },
        ]
    }
})

test('new skill should be added to student', () => {
    expect(student.technologies.length).toBe(3);
    addSkill(student, 'soft skill');
    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('soft skill');
    expect(student.technologies[3].id).toBeDefined();
})

test('student should be made active', () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student);
    expect(student.isActive).toBe(true);
})

test('does student live in city ?', () => {
    const result1 = doesStudentLiveIn(student, 'Kyiv');
    const result2 = doesStudentLiveIn(student, 'Lviv');

    expect(result1).toBe(false);
    expect(result2).toBe(true);
})

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

test('Budget should be changed for Hospital', () => {
    addMoneyToBudget(city.governmentBuildings[0],  100000);

    expect(city.governmentBuildings[0].budget).toBe(300000);
})

test('House should be repared', () => {
    repairHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy();
})

test('staff should be increased', () => {
    toHireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(1020);
})