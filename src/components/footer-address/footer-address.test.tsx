import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { FooterAddress } from '.';


describe('FooterAddress', () => {
	test('renders its content', async () => {
		render(<FooterAddress />);

		const intro = await screen.findByText(/content/i);

		/**
		 * @note Placeholder assertion:
		 * This is redundant as 'findByText' will error if not present.
		 * Remove when writing your own tests.
		 */
		expect(intro).toBeInTheDocument();
	});

	test('is accessible', async () => {
		const { container } = render(<FooterAddress />);

		const element = await axe(container);

		expect(element).toHaveNoViolations();
	});
});
