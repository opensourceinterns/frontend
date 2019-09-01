import React from 'react';
import ViewProvider from '../context/ViewContext';
import ThemeProvider from '../context/ThemeContext';
import Main from './Main';
import Grid from '../grid/Grid';
import GridItem from '../grid/GridItem';
import styled from 'styled-components';

// const App = () => {
// 	return (
// 		<ViewProvider>
// 			<ThemeProvider>
// 				<Main />
// 			</ThemeProvider>
// 		</ViewProvider>
// 	);
// }

const TestContainer = styled.div`
	height: 100vh;
`;

const App = () => {
	return (
		<TestContainer>
			<Grid>
				<GridItem>
					<Grid justifyContent={'center'}>
						<GridItem>11</GridItem>
						<GridItem>12</GridItem>
					</Grid>
				</GridItem>
				<GridItem test={3}>2</GridItem>
				<GridItem>3</GridItem>
				<GridItem>4</GridItem>
				<GridItem>5</GridItem>
				<GridItem>6</GridItem>
				<GridItem>7</GridItem>
				<GridItem>8</GridItem>
			</Grid>
		</TestContainer>
	);
}

export default App;
