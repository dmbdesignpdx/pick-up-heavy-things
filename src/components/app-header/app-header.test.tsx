import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { AppHeader } from '.';


describe('AppHeader', () => {
	test('renders its content', async () => {
		render(<AppHeader />);

		const intro = await screen.findByText(/content/i);

		/**
		 * @note Placeholder assertion:
		 * This is redundant as 'findByText' will error if not present.
		 * Remove when writing your own tests.
		 */
		expect(intro).toBeInTheDocument();
	});

	test('is accessible', async () => {
		const { container } = render(<AppHeader />);

		const element = await axe(container);

		expect(element).toHaveNoViolations();
	});
});
