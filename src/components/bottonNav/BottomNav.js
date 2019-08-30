import React, { useContext } from 'react';
import styled from 'styled-components';
import { ViewContext, Views } from '../../context/ViewContext';
import BottomNavItem from './BottomNavItem';
import SearchIcon from '../../icons/SearchIcon';

const NavContainer = styled.div`
	height: 56px;
	width: 100%;
	background-color: #ddd;
	position: fixed;
	bottom: 0;
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-evenly;
`;

const BottomNav = () => {
	const [viewState, setState] = useContext(ViewContext);

	const handleClick = (title) => {
		setState({ currentView: title });
	};

	const bottomBarItems = [
		{
			title: Views.SEARCH,
			icon: <SearchIcon />,
			showTitle: false
		}
	];
	return (
		<NavContainer>
			{ bottomBarItems.map((item) => (
				<BottomNavItem
					key={item.title}
					title={item.title}
					icon={item.icon}
					isSelected={viewState.currentView === item.title}
					onClick={handleClick}
				/>
			)) }
		</NavContainer>
	);
};

export default BottomNav;