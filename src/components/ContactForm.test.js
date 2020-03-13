import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test('renders correctly', () => {
    render(<ContactForm />);
  });

  test('Contact form is working', async () => {
    const { getByLabelText, findByTestId } = render(<ContactForm />);

    const firstNameInput = getByLabelText(/First Name*/i);
    const lastNameInput = getByLabelText(/Last Name*/i);
    const emailInput = getByLabelText(/Email*/i);
    const messageInput = getByLabelText(/Message/i);

    fireEvent.change(firstNameInput, {
        target: { name: 'firstName', value: 'bill' },
      });
      fireEvent.change(lastNameInput, {
        target: { name: 'lastName', value: 'luo' },
      });
      fireEvent.change(emailInput, {
        target: { name: 'email', value: 'email@email.com' },
      });
      fireEvent.change(messageInput, {
        target: { name: 'message', value: 'message' },
      });
     

  })



