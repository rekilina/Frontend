import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
	isLogged: false,
	onLogOut: () => [],
	onLogIn: (email, password) => []
});

export const AuthContextProvider = (props) => {

	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const loggingHandler = () => {
		const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');
		if (storedUserLoggedInInfo === '1') {
			setIsLoggedIn(true);
		}
	}

	useEffect(loggingHandler, []);

	const logoutHandler = () => {
		localStorage.removeItem('isLoggedIn');
		setIsLoggedIn(false);
	}

	const loginHandler = () => {
		localStorage.setItem('isLoggedIn', '1');
		setIsLoggedIn(true);
	}

	return <AuthContext.Provider value={{
		isLogged: isLoggedIn,
		onLogOut: logoutHandler,
		onLogIn: loginHandler
	}}>{props.children}</AuthContext.Provider>
}

export default AuthContext;