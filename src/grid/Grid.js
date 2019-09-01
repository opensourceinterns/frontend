import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GridContext from './GridContext';

const Grid = (props) => {
	const { children, row, col, blocks, justifyContent } = props;
	const [state, setState] = useState({
		blocks: blocks ? blocks : children.length,
		isRow: !col
	});

	console.log(justifyContent);

	const GridContainer = styled.div`
		display: flex;
		flex-direction: ${col ? 'column' : 'row'};
		height: 100%;
		width: 100%;
	`;

	return (
		<GridContext.Provider value={[state, setState]}>
			<GridContainer>
				{ children }
			</GridContainer>
		</GridContext.Provider>
	)
}

Grid.propTypes = {
	// row: PropTypes.bool,
	col: PropTypes.bool,
	blocks: PropTypes.number,
	justifyContent: PropTypes.oneOf(['center', 'left', 'right'])
}

// Grid.defaultProps = {
// 	blocks: 12
// }

export default Grid;