import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Theme } from '../../constants/ThemeConstants';
import forwardProps from '../../utils/forwardProps';

const textScaleUp = keyframes`
	from { transform: scale(1); }
	to { transform: scale(1.1); }
`;

const textScaleDown = keyframes`
	from { transform: scale(1.1); }
	to { transform: scale(1); }
`;

const iconScaleUp = keyframes`
	from { transform: scale(1); }
	to { transform: scale(1.3); }
`;

const iconScaleDown = keyframes`
	from { transform: scale(1.3); }
	to { transform: scale(1); }
`;


const ItemContainer = styled.div`
	min-width: 50px;
	height: 40px;
	margin-top: ${Theme.MARGIN.SMALL};
	padding: 0 ${Theme.MARGIN.SMALL};
	font-size: 12px;
	display: flex;
	flex-direction: column;
	align-content: space-around;
	justify-content: center;
	align-items: center;
`;

const Title = styled.div`
	color: ${props => props.selected !== '' ? props.selected : '#000'};
	animation: ${props => props.selected === '' ? textScaleDown : textScaleUp} 0.5s forwards;
`;

const Test = styled.div`
	animation: ${props => props.selected === '' ? iconScaleDown : iconScaleUp} 0.5s forwards;
`;

const BottomNavItem = (props) => {
	const {
		onClick,
		isSelected,
		title,
		showTitle,
		icon,
		showIcon
	} = props;

	const iconStyles = {
		selected: isSelected
	};

	return (
		<ItemContainer isSelected={isSelected} onClick={() => onClick(title)}>
			{ showIcon && icon ? <Test selected={isSelected ? 'red' : ''}>{forwardProps(icon, iconStyles)}</Test> : null }
			{ showTitle ? <Title selected={isSelected ? 'red' : ''}>{title}</Title> : null }
		</ItemContainer>
	);
};

BottomNavItem.propTypes = {
	onClick: PropTypes.func.isRequired,
	isSelected: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired,
	showTitle: PropTypes.bool,
	icon: PropTypes.any,
	showIcon: PropTypes.bool
};

BottomNavItem.defaultProps = {
	showTitle: true,
	icon: null,
	showIcon: true
};

export default BottomNavItem;