import React, { useContext } from 'react';
import { ViewContext, Views } from '../context/ViewContext';

const Main = (props) => {
	const [viewState, setState] = useContext(ViewContext);

	let content = null;
	switch(viewState.currentView) {
		case Views.SEARCH:
			content = <SearchView />;
			break;
	}

	return (
		<div>
			{content}
		</div>
	);
}

export default Main;