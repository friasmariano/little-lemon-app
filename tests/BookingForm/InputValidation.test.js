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