import React, { useContext } from 'react';
import { ViewContext, Views } from '../context/ViewContext';
import SearchView from './SearchView';

const Main = (props) => {
	const [viewState, setState] = useContext(ViewContext);

	let content = null;
	switch(viewState.currentView) {
		case Views.SEARCH:
			content = <SearchView />;
			break;
		default:
			content = null;
	}

	return (
		<div>
			{ content }
		</div>
	);
}

export default Main;