import { render, screen } from '@testing-library/react'
import { test, expect } from '@jest/globals'
import BookingForm from '../components/BookingForm'

test('Renders the BookingForm heading', () => {
    render(<BookingForm />)

    const headingElement = screen.getByText('Make reservation')

    expect(headingElement).toBeDefined();
})