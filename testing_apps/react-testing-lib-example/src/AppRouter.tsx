import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import User from './users/User';
import Users from './users/Users';

type Props = {}

const AppRouter = (props: Props) => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/users" element={<Users />} />
				<Route path={`/users/:id`} element={<User />} />
				<Route path="/*" element={<ErrorPage />} />
			</Routes>
		</>
	)
}

export default AppRouter
