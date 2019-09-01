import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import GridContext from './GridContext';

const GridItem = (props) => {
	const { children, test } = props;
	const [grid, setGrid] = useContext(GridContext);

	const calc = (100 * (test / grid.blocks)) + '%';

	const ItemContainer = styled.div`
		background-color: red;
		width: ${grid.isRow ? calc : 'inherit'};
		height: ${!grid.isRow ? calc : 'inherit'};
	`;

	return (
		<ItemContainer>
			{ children }
		</ItemContainer>
	);
}

GridItem.propTypes = {
	children: PropTypes.node,
	test: PropTypes.number
}

GridItem.defaultProps = {
	test: 1
}

export default GridItem;