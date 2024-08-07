import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { NumberInput } from '.';


describe('NumberInput', () => {
	test('renders its content', async () => {
		render(<NumberInput label="hi" value="50" />);

		const intro = await screen.findByText(/content/i);

		expect(intro).toBeInTheDocument();
	});

	test('is accessible', async () => {
		const { container } = render(<NumberInput label="hi" value="50" />);

		const element = await axe(container);

		expect(element).toHaveNoViolations();
	});
});
