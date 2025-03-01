import { render, screen, fireEvent } from '@testing-library/react'
import App from './App';
import '@testing-library/jest-dom';


describe('Test app with React Router', () => {
	test('Router test', () => {
		render(<App />);
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
})