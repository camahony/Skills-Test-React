import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccountMenu from './AccountMenu';
import BasicForm from './BasicForm'

import { Routes, Route, Link } from "react-router-dom";


const App = () => {
	const [openForm, setOpenForm] = React.useState(false);
	const handleOnClick = (page) => {
		console.log('open');
		if (!openForm) {
			setOpenForm(true)
		} else {
			setOpenForm(false)
		}
	};
	return (
		<Container maxWidth="sm">
			<Routes>
				<Route path="/" element={<Link to="/todo"><AccountMenu onClick={handleOnClick} /></Link>}/>
				<Route path="/todo" element={<BasicForm />}/>
			</Routes>
			<Box sx={{ my: 4 }}>
				<Typography variant="h4" component="h1" gutterBottom>
					React Skills Test
				</Typography>
			</Box>
		</Container>
	);
}

export default App;