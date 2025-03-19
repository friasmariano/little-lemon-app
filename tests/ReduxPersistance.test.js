
import { makeStore } from "../lib/store";

beforeAll(() => {
    global.localStorage.clear();
})

test('Should persist to localStorage', async () => {
    const { store } = makeStore();

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

    await new Promise((resolve) => {
        setTimeout(resolve, 500);
    })

    const storedState = localStorage.getItem('persist:root');
    expect(storedState).toBeDefined();

    const parsedState = JSON.parse(storedState);
    expect(parsedState.reservation).toBeDefined();
    expect(JSON.parse(parsedState.reservation).data.name).toBe('John Harris');
})

test('Should read from localStorage', async () => {
    const state = {
        reservation: [
            {
                name: 'John Harris',
                email: 'info@johnharris.com',
                phone: '1234567890',
                date: '2025-03-18',
                time: '17:30',
                guest: 3,
                ocassion: 'Birthday',
                creditCard: '2039-1672-1227-5618'
            }
        ]
    }
    localStorage.setItem('persist:root', JSON.stringify({ reservation: JSON.stringify(state.reservation) }));

    const { store } = makeStore();

    await new Promise((resolve) => {
        setTimeout(resolve, 300);
    });

    const currentState = store.getState();

    expect(currentState.reservation).toBeDefined();
    expect(currentState.reservation[0].name).toBe('John Harris');
    expect(currentState.reservation[0].phone).toBe('1234567890')
})