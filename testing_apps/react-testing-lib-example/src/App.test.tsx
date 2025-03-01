import { render, screen, fireEvent } from '@testing-library/react'
import App from './App';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';


describe('Test app with React Router', () => {
	test('Router test', () => {
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
		const homePageLink = screen.getByTestId('home-page-link');
		const usersPageLink = screen.getByTestId('users-page-link');
		// click on these links
		fireEvent.click(homePageLink);
		// import '@testing-library/jest-dom';
		expect(screen.getByTestId('home-page-header')).toBeInTheDocument();
		fireEvent.click(usersPageLink);
		screen.debug();
		expect(screen.getByTestId('user-list')).toBeInTheDocument();
	})

	test('Reder error page', () => {
		render(
			<MemoryRouter initialEntries={["/asdasd"]}>
				<App />
			</MemoryRouter>
		);
		expect(screen.getByTestId('error-page')).toBeInTheDocument();
	})
})