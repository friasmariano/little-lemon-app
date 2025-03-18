'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import Hero from "../../../components/Hero"
import { useSelector } from 'react-redux'

export default function BookingConfirmation() {
        const reservationData = useSelector((state) => state.reservation.data);

    return (
        <main>
            <Hero>
                <div style={{ display: 'flex',
                                flexDirection: 'column',
                                margin: '50px 0px 100px 0px'}}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '650'  }}>Confirmation</h1>
                    {/* <p style={{ fontSize: '1.3rem' }}>Book your visit in your favorite spot</p> */}
                </div>
            </Hero>
            <section style={{ minHeight: '500px',
                              display: 'flex',
                              flexDirection: 'column',
                              textAlign: 'center',
                              alignItems: 'center'
             }}>
                <div style={{ minWidth: '600px',
                              minHeight: '340px',
                              borderRadius: '16px',
                              boxShadow: '0px 5px 20px rgba(0,0,0,0.15)',
                              marginTop: '50px'}}>
                    <h1 className="markazi-text"
                        style={{ margin: '90px 0px 0px 0px',
                                 fontSize: '2.1rem',
                                 color: 'rgba(102, 102, 102, 0.9)'

                    }}>You're table it's been reserved</h1>
                    <div style={{ width: '100%',
                                  height: '3px',
                                  marginTop: '10px',
                                  backgroundColor: 'rgba(102, 102, 102, 0.05)'  }}>
                    </div>
                    <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{ fontSize: '4.4rem',
                                marginTop: '30px',
                                color: '#3c763d'
                        }}
                 />
                </div>

                <div style={{ display: 'flex',
                              margin: '20px 0px 30px 0px',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center'}}>
                    <p style={{ display: 'flex',
                                width: '500px',
                                height: '30px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'white',
                                textAlign: 'center'}}>
                        <b style={{ marginRight: '10px' }}>Name</b>
                        <span>
                            {reservationData.name}
                        </span>
                    </p>
                    <p style={{ display: 'flex',
                                width: '500px',
                                height: '30px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'white',
                                textAlign: 'center'}}>
                        <b style={{ marginRight: '10px' }}>Lastname</b>
                        <span>
                            {reservationData.lastname}
                        </span>
                    </p>
                    <p style={{ display: 'flex',
                                width: '500px',
                                height: '30px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'white',
                                textAlign: 'center'}}>
                        <b style={{ marginRight: '10px' }}>Phone</b>
                        <span>
                            {reservationData.phone}
                        </span>
                    </p>
                    <p style={{ display: 'flex',
                                width: '500px',
                                height: '30px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'white',
                                textAlign: 'center'}}>
                        <b style={{ marginRight: '10px' }}>Date</b>
                        <span>
                            {reservationData.date}
                        </span>
                    </p>
                    <p style={{ display: 'flex',
                                width: '500px',
                                height: '30px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'white',
                                textAlign: 'center'}}>
                        <b style={{ marginRight: '10px' }}>Time</b>
                        <span>
                            {reservationData.time}
                        </span>
                    </p>
                    <p style={{ display: 'flex',
                                width: '500px',
                                height: '30px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'white',
                                textAlign: 'center'}}>
                        <b style={{ marginRight: '10px' }}>Guests</b>
                        <span>
                            {reservationData.guests}
                        </span>
                    </p>
                    <p style={{ display: 'flex',
                                width: '500px',
                                height: '30px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'white',
                                textAlign: 'center'}}>
                        <b style={{ marginRight: '10px' }}>Ocassion</b>
                        <span>
                            {reservationData.ocassion}
                        </span>
                    </p>
                    <p style={{ display: 'flex',
                                width: '500px',
                                height: '30px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'white',
                                textAlign: 'center'}}>
                        <b style={{ marginRight: '10px' }}>Credit Card</b>
                        <span>
                            {reservationData.creditCard}
                        </span>
                    </p>
                </div>
            </section>
        </main>
    )
}