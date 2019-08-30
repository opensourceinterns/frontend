import React from 'react';
import ViewProvider from '../context/ViewContext';
import Main from './Main';

const App = () => {
	return (
		<ViewProvider>
			<Main />
		</ViewProvider>
	);
}

export default App;
