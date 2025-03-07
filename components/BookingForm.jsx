'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { ErrorMessage } from "@hookform/error-message"
import Modal from './Modal'

import buttonStyles from '../styles/button.module.css'
import styles from '../styles/bookform.module.css'

export default function BookingForm({ sectionNames, availableTimes, updateTimes }) {
    console.log('Available Times', availableTimes);

    // const [selectedTime, setSelectedTime] = useState('17:00');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleDateChange = (event) => {
        updateTimes(event.target.value);
    }

    // Hook Forms
    const { register, handleSubmit, watch, formState: { errors, isValid, isDirty } } = useForm({
        mode: 'onBlur'
    });

    const onSubmit = (data) => {
        alert('Reservation submitted succesfully.');
        console.log(data);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}
              className={styles.container}>

              <Modal isOpen={isModalOpen} onClose={closeModal} title='Confirmation'>
                <div>
                    Modal body
                </div>
              </Modal>

            <fieldset className={styles.fieldset}>
                <legend className="text-xl mb-4">{sectionNames[0]}</legend>

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

            <fieldset className={styles.fieldset}>
                <legend className="text-xl mb-4">{sectionNames[1]}</legend>

                {/* Date */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className={styles.section}>
                        <h1 className={styles.subtitle}>Choose Date</h1>

                        <div className={styles.dateContainer}>
                            {/* Day */}
                            <div className={styles.dateSection}>
                                <label htmlFor="day">Day</label>
                                <input
                                    placeholder='1'
                                    id="day"
                                    name="day"
                                    type="number"
                                    defaultValue=""
                                    {...register("day", {
                                            required: "The 'day' field is required",
                                            min: {
                                                value: 1,
                                                message: "The 'day' must be at least '1'"
                                            },
                                            max: {
                                                value: 31,
                                                message: "The 'day' must not exceed '31'"
                                            }
                                    })}
                                        style={{ textAlign: 'center',
                                                padding: '0px 0px 0px 15px',
                                                width: '75px'
                                        }}
                                />
                            </div>
                            {/* Month */}
                            <div className={styles.dateContainer}>
                                <div className={styles.dateSection}>
                                    <label htmlFor="month">Month</label>
                                    <input
                                        placeholder='3'
                                        id="month"
                                        name="month"
                                        type="number"
                                        defaultValue=""
                                    {...register("month", {
                                            required: "The 'month' field is required",
                                            min: {
                                                value: 1,
                                                message: "The 'month' must be at least '1'"
                                            },
                                            max: {
                                                value: 12,
                                                message: "The 'month' must not exceed '12'"
                                            }
                                    })}
                                        style={{ textAlign: 'center',
                                                padding: '0px 0px 0px 15px',
                                                width: '75px'
                                        }}
                                    />
                                </div>
                            </div>
                            {/* Year */}
                            <div className={styles.dateContainer}>
                                <div className={styles.dateSection}>
                                    <label htmlFor="year">Year</label>
                                    <input placeholder='2025'
                                        id="year"
                                        name="year"
                                        type="number"
                                        defaultValue=""
                                    {...register("year", {
                                            required: "The 'year' field is required",
                                            min: {
                                                value: 2025,
                                                message: "The 'year' must be at least '2025'"
                                            },
                                            max: {
                                                value: 2026,
                                                message: "The 'year' must not exceed '2026'"
                                            }
                                    })}
                                        style={{ textAlign: 'center',
                                                padding: '0px 0px 0px 15px',
                                                width: '75px'
                                        }}
                                    />
                                </div>
                            </div>
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
                <div className={styles.section}>
                    <label className={styles.subtitle}
                           htmlFor="rest-time">Choose time</label>
                    {/* <select id="rest-time" value={selectedTime}
                     onChange={e => setSelectedTime(e.target.value)}>
                        {availableTimes.map((time) =>
                            <option key={time.id}>
                                {time.value}
                            </option>
                        )}
                    </select> */}

                    {availableTimes.map(({ id, hour, minute, meridian, available }) => {
                        <div key={id}>
                            <input type="checkbox" checked={available} readonly/>
                            <label>{`${hour}:${minute.toString().padStart(2, "0")} ${meridian}`}</label>
                        </div>
                    })}
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
                                        width: '75px'
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
                    <select id="ocassion">
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
            </fieldset>

            <fieldset className={styles.fieldset}>
                <legend className="text-xl mb-4">{sectionNames[2]}</legend>

                {/* Credit Card */}
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
            <div className={`${styles.section} ${styles.submit}`}>
                <button className={isValid ? buttonStyles.default : buttonStyles.disabled}
                        type="submit" disabled={isValid}>
                    Make reservation
                </button>
            </div>

        </form>
    )
}