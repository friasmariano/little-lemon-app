
import { useReducer } from 'react';

const SET_AVAILABLE_TIMES = 'SET_AVAILABLE_TIMES';

const initializeTimes = () => {
    return [
        { id: 1, hour: 5, minute: 0, medirian: 'PM', available: true},
        { id: 2, hour: 6, minute: 0, meridian: 'PM', available: true},
        { id: 3, hour: 7, minute: 0, meridian: 'PM', available: true},
        { id: 4, hour: 8, minute: 0, meridian: 'PM', available: true},
        { id: 5, hour: 9, minute: 0, meridian: 'PM', available: true},
        { id: 6, hour: 10, minute: 0, meridian: 'PM', available: true}
    ];
};

const availableTimesReducer = (state, action) => {
    if (action.type == SET_AVAILABLE_TIMES)
        return action.payload;

    return state;
}

export const useAvailableTimes = () => {
    return useReducer(availableTimesReducer, initializeTimes());
}