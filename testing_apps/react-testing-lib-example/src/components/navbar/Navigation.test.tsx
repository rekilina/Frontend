import { fireEvent, render, screen } from '@testing-library/react';
import { RenderWithRouter } from '../../tests/helpers/RenderWithRouter';
import Navigation from './Navigation';
import '@testing-library/jest-dom';

describe('Navigation', () => {
	test('Navigation', () => {
		render(
			<RenderWithRouter>
				<Navigation />
			</RenderWithRouter>
		);
		const homePageLink = screen.getByTestId('home-page-link');
		const usersPageLink = screen.getByTestId('users-page-link');
		expect(homePageLink).toBeInTheDocument();
		expect(usersPageLink).toBeInTheDocument();
		fireEvent.click(usersPageLink);
		const usersPage = screen.getByTestId('user-list');
		expect(usersPage).toBeInTheDocument();
	});
})