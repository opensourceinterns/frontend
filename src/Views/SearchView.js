import React, { useState } from 'react';
import SearchInput from '../components/SearchInput';
import Card from '../components/Card';

const SearchView = () => {
	const [searchResults, setSearchResult] = useState([]);

	const onSubmit = (searchTerm) => {
		// TODO: call the backend
		const mockData = [
			searchTerm,
			'item1',
			'item2',
			'item3'
		];

		setSearchResult(mockData);
	};

	return (
		<React.Fragment>
			<SearchInput onSubmit={onSubmit} />
			{ searchResults.map((item, index) => (
				<Card key={item + index}>
					{ item }
				</Card>
			)) }
		</React.Fragment>
	)
};

export default SearchView;