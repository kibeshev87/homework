import {initialPeople, UserType} from "../HW8";

type ActionType = {type: 'sort', payload: 'up' | 'down'} | {type: 'check', payload: number}


export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a,b)=>{
                if(a.age > b.age) return 1
                else if(a.age < b.age) return -1
                else return 0 //для совпадающих значений, писать обязательно
            })
            return action.payload === 'up' ? newState : newState.reverse()//если payload пришел 'up', значит вернуть новый массив,
            //в противном случае применить метод массива reverse()

        }

        case 'check': {
            return initialPeople.filter(a => a.age >= action.payload)
        }
        default: return state
    }
}