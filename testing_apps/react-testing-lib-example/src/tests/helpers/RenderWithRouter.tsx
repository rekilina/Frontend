import { MemoryRouter } from 'react-router-dom'
import AppRouter from '../../AppRouter'
import React from 'react';

type Props = {
	initialRoute?: string;
	children?: React.ReactNode;
}

export const RenderWithRouter = ({ children, initialRoute = '/' }: Props) => {
	return (
		<MemoryRouter initialEntries={[initialRoute]}>
			<AppRouter /> 
			{children}
		</MemoryRouter>
	);
};
