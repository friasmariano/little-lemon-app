
import { test, expect } from '@jest/globals'
import { fetchAPI } from '../api/api'
import { RESERVE_TIME, initializeTimes, updateTimes } from '../hooks/useAvailableTimes'

test('Returns a non-empty array of available booking times', () => {
    const date = new Date();
    const availableTimes = fetchAPI(date);

    expect(Array.isArray(availableTimes)).toBe(true);
    expect(availableTimes.length).toBeGreaterThan(0);
})

test("Include a pre-selected date as part of the dispatch data in 'updateTimes'", () => {
    const initialData = initializeTimes([
        '16:00', '17:00', '17:30', '18:00', '18:30', '19:00'
    ])

    const dispatch = jest.fn();

    const handleChange = (event) => {
        dispatch({ type: RESERVE_TIME, payload: { value: event.target.value }})
    }

    const selectedTime = '17:00';
    handleChange({target: { value: selectedTime }});

    expect(dispatch).toHaveBeenCalledWith({
        type: RESERVE_TIME,
        payload: { value: selectedTime }
    })
    expect(dispatch).toHaveBeenCalled();

    const updatedState = updateTimes(initialData, {
        type: RESERVE_TIME,
        payload: { value: selectedTime }
    })

    const updatedTime = updatedState.find(t => t.value === selectedTime);
    expect(updatedTime.available).toBe(false);
})