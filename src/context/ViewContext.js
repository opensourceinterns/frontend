import React, { useState } from 'react';

const Views = Object.freeze({
	SEARCH: 'search'
});

const ViewContext = React.createContext();

const ViewContextProvider = (props) => {
	const [viewState, setState] = useState({
		currentView: Views.SEARCH
	});

	return (
		<ViewContext.Provider value={[viewState, setState]}>
			{props.children}
		</ViewContext.Provider>
	);
};

export { Views, ViewContext };
export default ViewContextProvider;
