import React from 'react';
import ViewProvider from '../context/ViewContext';
import ThemeProvider from '../context/ThemeContext';
import Main from './Main';

const App = () => {
	return (
		<ViewProvider>
			<ThemeProvider>
				<Main />
			</ThemeProvider>
		</ViewProvider>
	);
}

export default App;
