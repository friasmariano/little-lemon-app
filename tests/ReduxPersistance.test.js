
import { makeStore } from "../lib/store";
import { persistStore } from 'redux-persist';

beforeAll(() => {
    global.localStorage.clear();
})

test('Should persist to localStorage', () => {
    const { store, persistor } = makeStore();

    store.dispatch({
        type: 'reservation/update',
        payload: {
            name: 'John Harris',
            email: 'info@johnharris.com',
            phone: '1234567890',
            date: '2025-03-18',
            time: '17:30',
            guest: 3,
            ocassion: 'Birthday',
            creditCard: '2039-1672-1227-5618'
        }
    })

    persistor.flush().then(() => {
        const storedState = localStorage.getItem('persist:root');

        const parsedState = JSON.parse(storedState);
        expect(parsedState.reservation).toBeDefined();
        expect(parsedState.reservation.data).toBeDefined();
        expect(parsedState.reservation.data.name).toBe('John Harris');
    })
})