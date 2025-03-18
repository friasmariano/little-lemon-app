'use client';

import { useSelector, useDispatch } from 'react-redux'
import { update } from '../../lib/features/table-reservation/store/reservation-slice'
import Hero from '../../components/Hero';
import buttonStyles from '../../styles/button.module.css'

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
            <div style={{ display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '20px',
                          paddingTop: '20px' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Reservation data</h1>
                <div>
                    <p><b>Name: </b>{reservationData.name}</p>
                    <p><b>Lastname: </b>{reservationData.lastname}</p>
                    <p><b>Phone: </b>{reservationData.phone}</p>
                    <p><b>Date: </b>{reservationData.date}</p>
                    <p><b>Time: </b>{reservationData.time}</p>
                    <p><b>Guest: </b>{reservationData.guest}</p>
                    <p><b>Ocassion: </b>{reservationData.ocassion}</p>
                    <p><b>Credit Card: </b>{reservationData.creditCard}</p>
                </div>
            </div>
            <div style={{ display: 'flex',
                          alignItems: 'center',
                          margin: 'auto',
                          padding: '10px 0px 20px 10px',
                          gap: '10px'}}>
                <button className={buttonStyles.default}
                        onClick={handleClick}>Add</button>

            </div>
        </section>
    )
}