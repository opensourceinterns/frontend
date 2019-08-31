import React, { useState } from 'react';

const ThemeContext = React.createContext();

const ThemeContextProvider = (props) => {
	const [theme, setTheme] = useState({
		isDark: false,
		primary: {
			bg: '#e74c3c',
			text: '#e74c3c'
		},
		secondary: {
			bg: '#3498db',
			text: '#3498db'
		}
	});

	return (
		<ThemeContext.Provider value={[theme, setTheme]}>
			{props.children}
		</ThemeContext.Provider>
	);
};

export { ThemeContext };
export default ThemeContextProvider;
