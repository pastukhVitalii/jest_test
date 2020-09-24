import {GovernmentBuildingType, HouseType} from "./02";

export type TechnologiesType = {
    id: number
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    city: string
    technologies: Array<TechnologiesType>
}

const student: StudentType = {
    id: 1,
    name: 'Vitaliy',
    age: 27,
    isActive: false,
    city: 'Lviv',
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
            id: 1,
            title: 'JS'
        },
    ]
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}
export const makeStudentActive = (student: StudentType) => {
    return student.isActive = true;
}

export const doesStudentLiveIn = (student: StudentType, city: string) => {
    return student.city === city
}

/*export const addMoneyToBudget = (buildings: Array<GovernmentBuildingType>, money: number) => {
    let newArr = buildings.map(b => b.budget + money);
    return newArr;
}*/

export const addMoneyToBudget = (building: GovernmentBuildingType, money: number) => {
    building.budget += money
}

export const repairHouse = (houses: HouseType) => {
    houses.repaired = true;
}

export const toHireStaff = (building: GovernmentBuildingType, money: number) => {
    building.staffCount += money
}