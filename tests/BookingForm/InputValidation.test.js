import userEvent from '@testing-library/user-event';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
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

test("It confirms 'firstname' input shows a valid message", async () => {
    render(<BookingForm />);

    const firstnameInput = screen.getByLabelText(/firstname/i);

    // Invalid
    fireEvent.blur(firstnameInput);
    await waitFor(() => {
        expect(screen.getByText('The firstname is required'));
    })

    // Valid
    userEvent.type(firstnameInput, 'John');
    fireEvent.blur(firstnameInput);
    await waitFor(() => {
        expect(screen.queryByText('The firstname is valid'));
    })
})

test("It confirms 'lastname' input shows a valid message", async () => {
    render(<BookingForm />);

    const lastnameInput = screen.getByLabelText(/lastname/i);

    // Invalid
    fireEvent.blur(lastnameInput);
    await waitFor(() => {
        expect(screen.getByText('The lastname is required'));
    })

    // Valid
    userEvent.type(lastnameInput, 'Harris');
    fireEvent.blur(lastnameInput);
    await waitFor(() => {
        expect(screen.queryByText('The lastname is valid'));
    })
})

test("It confirms 'email' input shows a valid message", async () => {
    render(<BookingForm />);

    const emailInput = screen.getByLabelText(/Email/i);

    // Invalid
    fireEvent.blur(emailInput);
    await waitFor(() => {
        expect(screen.getByText('The email is required'));
    })

    // Valid
    userEvent.type(emailInput, 'info@johnharris.com');
    fireEvent.blur(emailInput);
    await waitFor(() => {
        expect(screen.queryByText('The email is valid'));
    })
})

test("It confirms 'phone' input shows a valid message", async () => {
    render(<BookingForm />);

    const phoneInput = screen.getByLabelText(/phone/i);

    // Invalid
    fireEvent.blur(phoneInput);
    await waitFor(() => {
        expect(screen.getByText('The phone is required'));
    })

    // Valid
    userEvent.type(phoneInput, '1234567890');
    fireEvent.blur(phoneInput);
    await waitFor(() => {
        expect(screen.queryByText('The phone is valid'));
    })
})

test("It confirms 'card' input shows a valid message", async () => {
    render(<BookingForm />);

    const cardInput = screen.getByLabelText(/card/i);

    // Invalid
    fireEvent.blur(cardInput);
    await waitFor(() => {
        expect(screen.getByText('The card is required'));
    })

    // Valid
    userEvent.type(cardInput, '2039-1672-1227-5618');
    fireEvent.blur(cardInput);
    await waitFor(() => {
        expect(screen.queryByText('The card is valid'));
    })
})