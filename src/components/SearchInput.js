import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Theme } from '../constants/ThemeConstants';

const SearchContainer = styled.div`
	width: 100%;
	display: flex;
	align-content: center;
`;

const Input = styled.input`
	width: 90%;
	height: ${Theme.INPUT.LARGE};
	margin: ${Theme.MARGIN.MED} auto;
	padding: 0 ${Theme.MARGIN.SMALL};
`;

const SearchInput = (props) => {
	const { onSubmit } = props;
	const [searchTerm, setSearchTerm] = useState('');

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleKeyPress = (e) => {
		if (e.key !== 'Enter') {
			return;
		}

		onSubmit && onSubmit(searchTerm);
	};

	return (
		<SearchContainer>
			<Input
				className='search'
				type='text'
				value={searchTerm}
				onChange={handleChange}
				onKeyPress={handleKeyPress}
			/>
		</SearchContainer>
	);
};

SearchInput.propTypes = {
	onSubmit: PropTypes.func,
	width: PropTypes.number
};

export default SearchInput;