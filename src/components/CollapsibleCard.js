import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card';
import CaretIcon from '../icons/CaretIcon';
import { Theme } from '../constants/ThemeConstants';
import { Transition } from 'react-transition-group';

const transitionName = 'transition';

const CollapsibleCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: ${Theme.MARGIN.MED};
`;

const StyledCard = styled(Card)`
	margin-bottom: 0px;
`;

const Container = styled.div`
	display: flex;
	width: 100%;
`;

const PreviewContainer = styled.div`
	flex-grow: 2;
`;

const CaretContainer = styled.div`
	display: inline-block;
	position: relative;
	right: 0;
`;

const ContentContainer = styled.div`
	width: 82%;
	background-color: red;
	padding: ${Theme.MARGIN.MED};
	opacity: ${props => {
		console.log(props.state);
		switch(props.state) {
			case 'entering':
				return '0';
			case 'entered':
				return '1';
			case 'exiting':
				return '1';
			case 'exited':
				return '0'
		}
	}};
	top: ${props => {
		switch(props.state) {
			case 'entering':
				return '0px';
			case 'entered':
				return '150px';
			case 'exiting':
				return '150px';
			case 'exited':
				return '0px'
		}
	}};
	transition: opacity 100ms linear;
`;

const CollapsibleCard = (props) => {
	const { preview, content } = props;
	const [isExpanded, setExpanded] = useState(false);

	const handleClick = () => {
		setExpanded(!isExpanded);
	};

	return (
		<CollapsibleCardContainer>
			<StyledCard className={'test'}>
				<Container onClick={handleClick}>
					<PreviewContainer>
						{ preview }
					</PreviewContainer>
					<CaretContainer>
						<CaretIcon isExpanded={isExpanded} />
					</CaretContainer>
				</Container>
			</StyledCard>
			<Transition in={isExpanded} timeout={0}>
				{
					(state) => (
						<ContentContainer state={state}>
							{ content }
						</ContentContainer>
					)
				}
			</Transition>
		</CollapsibleCardContainer>
	);
}

CollapsibleCard.propTypes = {
	preview: PropTypes.node,
	expandedContent: PropTypes.node
}

export default CollapsibleCard;
