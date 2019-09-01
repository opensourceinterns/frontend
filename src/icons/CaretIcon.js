import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';

const StyledSvg = styled.svg`
	border-radius: 20px;
	transform: rotate(${props => props.expanded ? '180deg' : '0deg'});
	transition: all 0.3s ease;
`;

const CaretIcon = (props) => {
	const { isExpanded, size } = props;
	const [theme] = useContext(ThemeContext);

	const colour = theme.isDark ? '#fff' : '#000' ;

	return (
		<StyledSvg
			xmlns='http://www.w3.org/2000/svg'
			width={size} height={size}
			viewBox={`0 0 ${size} ${size}`}
			expanded={isExpanded}
		>
			<path fill={colour} d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z' />
			<path fill='none' d='M0 0h24v24H0V0z' />
		</StyledSvg>
	);
};

CaretIcon.propTypes = {
	isExpanded: PropTypes.bool,
	size: PropTypes.number
};

CaretIcon.defaultProps = {
	size: 24
}

export default CaretIcon;
