import userEvent from '@testing-library/user-event';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import BookingForm from '../../components/BookingForm';

jest.mock('../../Components/Modal', () => {
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

test("Allow form submission", async () => {
    render(<BookingForm />);

    const firstname = screen.getByLabelText(/Firstname/i);
    const lastname = screen.getByLabelText(/Lastname/i);
    const email = screen.getByLabelText(/Email/i);
    const phone = screen.getByLabelText(/Phone/i);
    const date = screen.getByLabelText(/Choose Date/i);
    const time = screen.getByLabelText(/Choose time/i);
    const guests = screen.getByLabelText(/Guest/i);
    const ocassion = screen.getByLabelText(/Ocassion/i);
    const card = screen.getByLabelText(/Card/i);

    const submitButton = screen.getByRole('button', { name: /submit/i });

    await act(async () => {
        userEvent.type(firstname, 'John');
        userEvent.type(lastname, 'Harris' );
        userEvent.type(email, 'john@sample.com');
        userEvent.type(phone, '1234567890');
        userEvent.type(date, '2025-03-20');
        userEvent.type(time, '17:00');
        userEvent.type(guests, '5');
        userEvent.type(ocassion, 'Birthday');
        userEvent.type(card, '2039-1672-1227-5618');

        userEvent.click(submitButton);
    })

    await act(async () => {
        expect(screen.queryByText('The firstname is valid'));
        expect(screen.queryByText('The lastname is valid'));
        expect(screen.queryByText('The email is valid'));
        expect(screen.queryByText('The phone is valid'));
        expect(screen.queryByText('The card is valid'));
    })
})


