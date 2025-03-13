'use client'

import { useForm } from 'react-hook-form'
// Date-fns
import { useEffect, useState, useReducer } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { ErrorMessage } from "@hookform/error-message"
import Modal from './Modal'
import buttonStyles from '../styles/button.module.css'
import styles from '../styles/bookform.module.css'
import { updateTimes, initializeTimes, RESERVE_TIME } from '../hooks/useAvailableTimes'
import { fetchAPI, seededRandom, submitAPI } from '../api/api.jsx'

export default function BookingForm({ sectionNames }) {

    const [times, dispatch] = useReducer(updateTimes, initializeTimes(fetchAPI(new Date())));

    const handleChange = (event) => {
        dispatch({ type: RESERVE_TIME, payload: { value: event.target.value } })
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Hook Forms
    const { register, handleSubmit, watch, formState: { errors, isValid, isDirty } } = useForm({
        mode: 'onBlur'
    });

    const onSubmit = (data) => {
        alert('Reservation submitted succesfully.');
        console.log(data);
    }

    return(
        <>
            <Modal isOpen={isModalOpen} onClose={closeModal} title='Confirmation'>
                <div>
                    Modal body
                </div>
              </Modal>

            <form onSubmit={handleSubmit(onSubmit)}
                  className={styles.container}>

                {/* Personal */}
                <fieldset className={styles.fieldset}>
                    <legend className="text-xl mb-4">Personal</legend>

                    {/* Name */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className={styles.section}>
                            <label htmlFor="name" className={styles.subtitle}>Name</label>
                            <input
                                className={styles.input}
                                placeholder="Your name here"
                                id="name"
                                name="name"
                                type="text"
                                defaultValue="Joe"
                                {...register("name", {
                                        required: "The 'name' field is required",
                                        minLength: {
                                            value: 3,
                                            message: "The 'name' must be at least '3' characters"
                                        },
                                        maxLength: {
                                            value: 31,
                                            message: "The 'name' must not exceed '50' characters"
                                        }
                                })}
                                    style={{ textAlign: 'center',
                                            padding: '0px 0px 0px 15px',
                                            width: '75px'
                                    }}
                            />
                        </div>

                        <div className={styles.errors}>
                            <ErrorMessage
                                errors={errors}
                                name="name"
                                render={({ message }) =>
                                <p>
                                    <FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: '5px'}} />
                                    {message}
                                </p>}
                            />
                        </div>
                    </div>

                    {/* Lastname */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className={styles.section}>
                            <label htmlFor="lastname" className={styles.subtitle}>Lastname</label>
                            <input
                                className={styles.input}
                                placeholder="Your lastname here"
                                id="lastname"
                                name="lastname"
                                type="text"
                                defaultValue="Doe"
                                {...register("lastname", {
                                        required: "The 'lastname' field is required",
                                        minLength: {
                                            value: 3,
                                            message: "The 'lastname' must be at least '3' characters"
                                        },
                                        maxLength: {
                                            value: 31,
                                            message: "The 'lastname' must not exceed '50' characters"
                                        }
                                })}
                                    style={{ textAlign: 'center',
                                            padding: '0px 0px 0px 15px',
                                            width: '75px'
                                    }}
                            />
                        </div>

                        <div className={styles.errors}>
                            <ErrorMessage
                                errors={errors}
                                name="lastname"
                                render={({ message }) =>
                                <p>
                                    <FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: '5px'}} />
                                    {message}
                                </p>}
                            />
                        </div>
                    </div>

                    {/* Phone number */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className={styles.section}>
                            <label htmlFor="phone" className={styles.subtitle}>Phone Number</label>
                            <input
                                className={styles.input}
                                placeholder="Your phone here"
                                id="phone"
                                name="phone"
                                type="text"
                                defaultValue="-"
                                {...register("phone", {
                                        required: "The 'phone' field is required",
                                        pattern: {
                                            value: /^\+?[1-9]\d{1,14}$/,
                                            message: "The 'phone' number has an invalid format"
                                        }
                                })}
                                    style={{ textAlign: 'center',
                                            padding: '0px 0px 0px 15px',
                                            width: '75px'
                                    }}
                            />
                            <h3 className='grey-md'
                                style={{  marginTop: '5px',
                                        fontSize: '0.9rem'

                            }}>(optional)</h3>
                        </div>

                        <div className={styles.errors}>
                            <ErrorMessage
                                errors={errors}
                                name="phone"
                                render={({ message }) =>
                                <p>
                                    <FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: '5px'}} />
                                    {message}
                                </p>}
                            />
                        </div>
                    </div>
                </fieldset>

                {/* Reservation */}
                <fieldset className={styles.fieldset}>
                    <legend className="text-xl mb-4">Reservation</legend>

                    {/* Date */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className={styles.section}>
                        <label className={styles.subtitle}
                            htmlFor="date">Choose time</label>

                            <div style={{ position: 'relative',
                                        display: 'flex',
                                        width: '150px'
                            }}>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    style={{
                                        padding: '8px',
                                        borderRadius: '5px',
                                        border: '1px solid rgba(102, 102, 102, 0.2)',
                                        fontSize: '16px',
                                        cursor: 'pointer',
                                        textAlign: 'center'
                                    }}
                                />
                                <span
                                    style={{
                                    position: "absolute",
                                    right: "8px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    pointerEvents: "none"
                                    }}
                                >
                                    <FontAwesomeIcon icon={faCalendar} />
                                </span>
                            </div>

                        </div>

                        <div className={styles.errors}>
                            <ErrorMessage
                                        errors={errors}
                                        name="day"
                                        render={({ message }) =>
                                        <p>
                                            <FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: '5px'}} />
                                            {message}
                                        </p>}
                                    />
                            <ErrorMessage
                                            errors={errors}
                                            name="month"
                                            render={({ message }) =>
                                            <p>
                                                <FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: '5px'}} />
                                                {message}
                                            </p>}
                                        />
                            <ErrorMessage
                                            errors={errors}
                                            name="year"
                                            render={({ message }) =>
                                            <p>
                                                <FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: '5px'}} />
                                                {message}
                                            </p>}
                                        />
                        </div>
                    </div>

                    {/* Time */}
                    <div style={{ display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  margin: '5px 0px 20px 0px' }}>
                        <label className={styles.subtitle}
                               htmlFor="time">Choose time</label>

                        <select id="time"
                                onChange={handleChange}
                                style={{ borderRadius: '16px',
                                         padding: '5px 0px 5px 0px',
                                         border: '1px solid rgba(102, 102, 102, 0.3)'}}>
                            <option value="">Select a time</option>
                            {times
                                .map((time) =>
                                <option key={time.id} value={time.value}>
                                    {time.value} {time.available ? '' : '(Reserved)'}
                                </option>
                            )}
                        </select>
                    </div>

                    {/* Guests */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className={styles.section}>
                            <label className={styles.subtitle}
                                htmlFor="guest">Number of Guests</label>
                            <input
                                placeholder='1'
                                id="guests"
                                name="day"
                                type="number"
                                defaultValue="1"
                                {...register("guests", {
                                        min: {
                                            value: 1,
                                            message: "The 'guest' list be at least '1'"
                                        },
                                        max: {
                                            value: 31,
                                            message: "The 'guest' list must not exceed '10'"
                                        }
                                })}
                                    style={{ textAlign: 'center',
                                            padding: '0px 0px 0px 15px',
                                            width: '75px',
                                            borderRadius: '16px',
                                            border: '1px solid rgba(102, 102, 102, 0.3)',
                                    }}
                            />
                        </div>
                        <div className={styles.errors}>
                            <ErrorMessage
                                errors={errors}
                                name="guests"
                                render={({ message }) =>
                                <p>
                                    <FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: '5px'}} />
                                    {message}
                                </p>}
                            />
                        </div>
                    </div>

                    {/* Ocassion */}
                    <div className={styles.section}>
                        <label className={styles.subtitle}
                               htmlFor="ocassion">Ocassion</label>
                            <select id="ocassion"
                                    style={{ border: '1px solid rgba(102, 102, 102, 0.3)',
                                             borderRadius: '16px',
                                             padding: '5px'
                                    }}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                    </div>
                </fieldset>

                {/* Credit Card */}
                <fieldset className={styles.fieldset}>
                    <legend className="text-xl mb-4">Credit Card</legend>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className={styles.section}>
                            <label htmlFor="card" className={styles.subtitle}>Credit Card</label>
                            <input
                                className={styles.input}
                                placeholder="Your credit card here"
                                id="card"
                                name="card"
                                type="text"
                                defaultValue=""
                                {...register("card", {
                                        required: "The 'card' field is required",
                                        pattern: {
                                            value: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12})$/,
                                            message: "The 'credit card' has an invalid format"
                                        }
                                })}
                                style={{
                                        textAlign: 'center',
                                        padding: '0px 0px 0px 15px',
                                        width: '75px'
                                    }}
                            />
                        </div>

                        <div className={styles.errors}>
                            <ErrorMessage
                                errors={errors}
                                name="card"
                                render={({ message }) =>
                                <p>
                                    <FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: '5px'}} />
                                    {message}
                                </p>}
                            />
                        </div>
                    </div>
                </fieldset>

                {/* Submit */}
                {/* disabled={isValid}> */}
                {/* className={isValid ? buttonStyles.default : buttonStyles.disabled} */}
                <div className={`${styles.submit}`}>
                    <button className={buttonStyles.default}
                            type="submit"
                            onClick={() => {
                                openModal()
                            }}>
                        Make reservation
                    </button>
                    <button className={buttonStyles.cancel}
                            onClick={() => {
                                closeModal()
                            }}>
                        Cancel
                    </button>
                </div>

            </form>
        </>
    )
}