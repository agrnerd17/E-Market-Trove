import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Rate from './userRating';
import '@testing-library/jest-dom'

describe('Functonality', () => {
    it('updates rating when a star is clicked', () => {
        render(<Rate />);
        
        // Click on the third star
        fireEvent.click(screen.getByLabelText('3'));
        
        // Check if the rating is updated to 3
        expect(screen.getByLabelText('3')).toHaveStyle('color: #ffc100');
    });

    it('handles highest rating correctly', () => {
        render(<Rate />);
        
        // Click on the fifth star
        fireEvent.click(screen.getByLabelText('5'));
        
        // Check if the rating is updated to 5
        expect(screen.getByLabelText('5')).toHaveStyle('color: #ffc100');
    });
});

describe('Boundary', () => {
    it('displays error message when no star is clicked', () => {
        render(<Rate />);
        
        // Click the submit button without selecting a star
        fireEvent.click(screen.getByText('Submit'));
        
        // Check if the error message is displayed
        expect(screen.getByText('Please select a star to rate.')).toBeInTheDocument();
    });
});

describe('Error Handling', () => {
    it('clears error message when a star is clicked', () => {
        render(<Rate />);
        
        // Click the submit button without selecting a star
        fireEvent.click(screen.getByText('Submit'));
        
        // Click on the second star
        fireEvent.click(screen.getByLabelText('2'));
        
        // Check if the error message is cleared
        expect(() => screen.getByText('Please select a star to rate.')).toThrow();
    });
});