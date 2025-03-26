'use client';

import { useSelector, useDispatch } from 'react-redux'
import { update } from '../../lib/features/table-reservation/store/reservation-slice'
import Hero from '../../components/Hero';
import styles from '../../styles/box.module.css';

export default function Test() {
    const dispatch = useDispatch();
    const reservationData = useSelector((state) => state.reservation.data);

    const handleClick = () => {
        dispatch(update({
            name: 'John',
            lastname: 'Doe',
            phone: '1234567890',
            date: '2021-08-01',
            time: '12:00',
            guest: 2,
            ocassion: 'Birthday',
            creditCard: '1234-5678-9012-3456'
        }))
    }

    return (
        <section>
            <Hero>
                Test
            </Hero>
            <div className={styles.card}>
                <h2>Card Title</h2>
                <p>This is a description.</p>
            </div>
        </section>
    )
}