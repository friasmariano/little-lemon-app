import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';
import Modal from '../components/Modal';

import BookingForm from '../components/BookingForm'
import React from 'react';

jest.mock('../Components/Modal', () => {
    return ({ isOpen, onClose}) => {
        const dialogRef = { current: { close: jest.fn(), showModal: jest.fn() } }

        if (isOpen) {
            dialogRef.current.showModal();
        } else {
            dialogRef.current.close();
        }

        return(
            <dialog ref={dialogRef} style={{ display: isOpen ? 'block': 'none'}}>
                <button onClick={onClose}>Close</button>
            </dialog>
        )
    }
})

test("It renders the 'name' input with the proper attributes", () => {
    render(<BookingForm />);

    const submitFunctionMock = jest.fn();
    render(<BookingForm submitFunction={submitFunctionMock} />);

    expect(submitFunctionMock).not.toHaveBeenCalled();

    const nameInput = screen.getByLabelText(/firstname/i);
    expect(nameInput).toBeInTheDocument();

    expect(nameInput).toHaveAttribute('id', 'firstname');
    expect(nameInput).toHaveAttribute('placeholder', 'Your name here');
    expect(nameInput).toHaveAttribute('type', 'text');
})

test("It renders the 'lastname' input with the proper attributes", () => {
    render(<BookingForm />);

    const lastnameInput = screen.getByLabelText(/lastname/i);
    expect(lastnameInput).toBeInTheDocument();

    expect(lastnameInput).toHaveAttribute('id', 'lastname');
    expect(lastnameInput).toHaveAttribute('placeholder', 'Your lastname here');
    expect(lastnameInput).toHaveAttribute('type', 'text');
})

test("It renders the 'phone' input with the proper attributes", () => {
    render(<BookingForm />);

    const phoneInput = screen.getByLabelText(/phone/i);
    expect(phoneInput).toBeInTheDocument();

    expect(phoneInput).toHaveAttribute('id', 'phone');
    expect(phoneInput).toHaveAttribute('placeholder', 'Your phone here');
    expect(phoneInput).toHaveAttribute('type', 'text');
})

test("It renders the 'date' input with the proper attributes", () => {
    render(<BookingForm />);

    const dateInput = screen.getByLabelText(/date/i);
    expect(dateInput).toBeInTheDocument();

    expect(dateInput).toHaveAttribute('id', 'date');
    expect(dateInput).toHaveAttribute('type', 'date');
})

test("It renders the 'time' select with the proper attributes", () => {
    render(<BookingForm />);

    const timeInput = screen.getByLabelText(/time/i);
    expect(timeInput).toBeInTheDocument();

    expect(timeInput).toHaveAttribute('id', 'time');
})

test("It renders the 'guests' input with the proper attributes", () => {
    render(<BookingForm />);

    const guestsInput = screen.getByLabelText(/guests/i);
    expect(guestsInput).toBeInTheDocument();

    expect(guestsInput).toHaveAttribute('id', 'guests');
    expect(guestsInput).toHaveAttribute('name', 'guests');
    expect(guestsInput).toHaveAttribute('type', 'number');
})

test("It renders the 'guests' input with the proper attributes", () => {
    render(<BookingForm />);

    const guestsInput = screen.getByLabelText(/guests/i);
    expect(guestsInput).toBeInTheDocument();

    expect(guestsInput).toHaveAttribute('id', 'guests');
    expect(guestsInput).toHaveAttribute('name', 'guests');
    expect(guestsInput).toHaveAttribute('type', 'number');
})

test("It renders the 'ocassion' select with the proper attributes", () => {
    render(<BookingForm />);

    const ocassionInput = screen.getByLabelText(/ocassion/i);
    expect(ocassionInput).toBeInTheDocument();

    expect(ocassionInput).toHaveAttribute('id', 'ocassion');
})

test("It renders the 'credit card' input with the proper attributes", () => {
    render(<BookingForm />);

    const cardInput = screen.getByLabelText(/card/i);
    expect(cardInput).toBeInTheDocument();

    expect(cardInput).toHaveAttribute('id', 'card');
    expect(cardInput).toHaveAttribute('name', 'card');
    expect(cardInput).toHaveAttribute('type', 'text');
    expect(cardInput).toHaveAttribute('placeholder', 'Your credit card here');
})