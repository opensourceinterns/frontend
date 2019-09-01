import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Theme } from '../constants/ThemeConstants';

const CardContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-bottom: ${Theme.MARGIN.MED};
`;

const CardContent = styled.div`
	width: 90%;
	padding: ${Theme.MARGIN.MED};
	background-color: #ddd;
	border-radius: ${Theme.RADIUS.SMALL};
`;

const Card = (props) => {
	const { children, className } = props;

	return (
		<CardContainer className={className}>
			<CardContent>
				{ children }
			</CardContent>
		</CardContainer>
	);
};

Card.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string
};

export default Card;