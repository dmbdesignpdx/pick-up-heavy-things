import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { InputForm } from '.';


describe('InputForm', () => {
	test('renders its content', async () => {
		render(<InputForm />);

		const intro = await screen.findByText(/content/i);

		/**
		 * @note Placeholder assertion:
		 * This is redundant as 'findByText' will error if not present.
		 * Remove when writing your own tests.
		 */
		expect(intro).toBeInTheDocument();
	});

	test('is accessible', async () => {
		const { container } = render(<InputForm />);

		const element = await axe(container);

		expect(element).toHaveNoViolations();
	});
});
