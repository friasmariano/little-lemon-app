'use client';

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../../lib/features/table-reservation/store/reservation-slice'
import Hero from '../../components/Hero';
import buttonStyles from '../../styles/button.module.css'

export default function Test() {
    const value = useSelector((state) => state.reservation.value);
    const dispatch = useDispatch();

    return (
        <section>
            <Hero>
                Test
            </Hero>
            <h1>Reservation Count: { value }</h1>
            <div style={{ display: 'flex',
                          alignItems: 'center',
                          margin: 'auto',
                          padding: '10px 0px 20px 10px',
                          gap: '10px'}}>
                <button className={buttonStyles.default}
                        onClick={() => dispatch(increment())}>Increment</button>
                <button className={buttonStyles.default}
                        onClick={() => dispatch(decrement())}>Decrement</button>
                <button className={buttonStyles.default}
                        onClick={() => dispatch(incrementByAmount(5))}>Increment By 5</button>
            </div>
        </section>
    )
}