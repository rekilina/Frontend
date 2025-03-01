import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Users from './Users';
import axios from 'axios';
import { vi, Mock } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { RenderWithRouter } from '../tests/helpers/RenderWithRouter';

// jest.mock('axios');
vi.mock('axios');

describe('USERS TEST', () => {
	const response = {
		data: [
			{
				"id": 1,
				"name": "Leanne Graham",
				"username": "Bret",
				"email": "Sincere@april.biz",
				"address": {
					"street": "Kulas Light",
					"suite": "Apt. 556",
					"city": "Gwenborough",
					"zipcode": "92998-3874",
					"geo": {
						"lat": "-37.3159",
						"lng": "81.1496"
					}
				},
				"phone": "1-770-736-8031 x56442",
				"website": "hildegard.org",
				"company": {
					"name": "Romaguera-Crona",
					"catchPhrase": "Multi-layered client-server neural-net",
					"bs": "harness real-time e-markets"
				}
			},
			{
				"id": 2,
				"name": "Ervin Howell",
				"username": "Antonette",
				"email": "Shanna@melissa.tv",
				"address": {
					"street": "Victor Plains",
					"suite": "Suite 879",
					"city": "Wisokyburgh",
					"zipcode": "90566-7771",
					"geo": {
						"lat": "-43.9509",
						"lng": "-34.4618"
					}
				},
				"phone": "010-692-6593 x09125",
				"website": "anastasia.net",
				"company": {
					"name": "Deckow-Crist",
					"catchPhrase": "Proactive didactic contingency",
					"bs": "synergize scalable supply-chains"
				}
			},
			{
				"id": 3,
				"name": "Clementine Bauch",
				"username": "Samantha",
				"email": "Nathan@yesenia.net",
				"address": {
					"street": "Douglas Extension",
					"suite": "Suite 847",
					"city": "McKenziehaven",
					"zipcode": "59590-4157",
					"geo": {
						"lat": "-68.6102",
						"lng": "-47.0653"
					}
				},
				"phone": "1-463-123-4447",
				"website": "ramiro.info",
				"company": {
					"name": "Romaguera-Jacobson",
					"catchPhrase": "Face to face bifurcated interface",
					"bs": "e-enable strategic applications"
				}
			}
		]
	}

	afterEach(() => {
		vi.clearAllMocks();
	});

	test('Renders users', async () => {
		// Properly mock axios.get with mockResolvedValue
		// (axios.get as jest.Mock) if you use jest
		(axios.get as Mock).mockReturnValue(response);
		render(
			<MemoryRouter>
				<Users />
			</MemoryRouter>
		);
		// Don't forget to import screen, otherwise
		// you might face ts error about findAllByTestId method
		const users = await screen.findAllByTestId('user-item');
		screen.debug();
		expect(users).toHaveLength(3);
		expect(axios.get).toHaveBeenCalledTimes(1);
		// screen.debug();
	});

	test('Go to user details', async() => {
		// Не можем просто рендерить Users, так как в нем не указаны другие рауты,
		// Они указаны в App. Так что придется указать их явно
		render(
			<RenderWithRouter >
				{/* or pass initialRoute="/users" */}
				<Users /> 
			</RenderWithRouter>
		);
		const users = await screen.findAllByTestId('user-item');
		expect(users).toHaveLength(3);
		const firstUser = users[0].querySelector('a')!;
		fireEvent.click(firstUser);
		const userDetail = screen.getByTestId('user-detail-page')
		expect(userDetail).toBeInTheDocument();
	})
});
