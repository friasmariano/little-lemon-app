
// State Initialization
export const initializeTimes = () => {
    return [
        { id: 0, value: '05:00 PM', available: true},
        { id: 1, value: '06:00 PM', available: true},
        { id: 2, value: '07:00 PM', available: true},
        { id: 3, value: '08:00 PM', available: true},
        { id: 4, value: '09:00 PM', available: true},
        { id: 5, value: '10:00 PM', available: true}
    ];
};

// Actions Definition
export const RESERVE_TIME = 'RESERVE_TIME';

// Reducer Function Conditionals
export const updateTimes = (state, action) => {
    switch(action.type) {
        case RESERVE_TIME:
            state = state.map(e =>
                e.value === action.payload.value
                    ? {...e, available: false}
                    : e
            )
        default:
            return state;
    }
}