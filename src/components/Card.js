import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Theme } from '../constants/ThemeConstants';

const CardContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const CardContent = styled.div`
	width: 90%;
	padding: ${Theme.MARGIN.MED};
	margin-bottom: ${Theme.MARGIN.MED};
	background-color: #ddd;
	border-radius: ${Theme.RADIUS.MED};
`;

const Card = (props) => {
	const { children } = props;

	return (
		<CardContainer>
			<CardContent>
				{ children }
			</CardContent>
		</CardContainer>
	);
};

Card.propTypes = {
	children: PropTypes.node
};

export default Card;