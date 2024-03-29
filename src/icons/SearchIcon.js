import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../context/ThemeContext';

const SearchIcon = (props) => {
	const { selected, selectedColour, size } = props;
	const [theme] = useContext(ThemeContext);

	let colour = theme.isDark ? '#fff' : '#000' ;
	if (selected) {
		switch(selectedColour) {
			case 'primary':
				colour = theme.primary.text;
				break;
			case 'secondary':
				colour = theme.secondary.text;
				break;
			default:
				colour = selectedColour ? selectedColour : theme.primary.text;
		}
	}

	return (
		<svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
			<path fill={colour} d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
			<path fill='none' d='M0 0h24v24H0z' />
		</svg>
	);
};

SearchIcon.propTypes = {
	selected: PropTypes.bool,
	selectedColour: PropTypes.string,
	size: PropTypes.number
};

SearchIcon.defaultProps = {
	size: 24
}

export default SearchIcon;
