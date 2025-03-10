
import { useReducer } from 'react';

const RESERVE_TIME = 'RESERVE_TIME';

export const initializeTimes = () => {
    return [
        { id: 1, value: '05:00 PM', available: true},
        { id: 2, value: '06:00 PM', available: true},
        { id: 3, value: '07:00 PM', available: true},
        { id: 4, value: '08:00 PM', available: true},
        { id: 5, value: '09:00 PM', available: true},
        { id: 6, value: '10:00 PM', available: true}
    ];
};

const availableTimesReducer = (state, action) => {
    switch(action.type) {
        case RESERVE_TIME:
            return state.map(time => {
                time.value = action.payload.value
                    ? {...time, available: false}
                    : time
            })
        default:
            return state;
    }
}

export const useAvailableTimes = () => {
    return useReducer(availableTimesReducer, initializeTimes());
}