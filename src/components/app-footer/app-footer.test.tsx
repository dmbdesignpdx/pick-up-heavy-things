import { render, screen } from '@testing-library/react';
import { axe } from '@testing-library/jest-axe';
import { AppFooter } from '.';


describe('AppFooter', () => {
	test('renders its content', async () => {
		render(<AppFooter />);

		const intro = await screen.findByText(/content/i);

		/**
		 * @note Placeholder assertion:
		 * This is redundant as 'findByText' will error if not present.
		 * Remove when writing your own tests.
		 */
		expect(intro).toBeInTheDocument();
	});

	test('is accessible', async () => {
		const { container } = render(<AppFooter />);

		const element = await axe(container);

		expect(element).toHaveNoViolations();
	});
});
