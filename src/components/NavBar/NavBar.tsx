import React from 'react';
import AuthStatus from '../../containers/UserContainers/AuthStatus';
import { Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { NavBar, Logotype } from './NavBarStyles';

export default () => {
	return (
		<Container>
			<Row>
				<NavBar>
					<Logotype>
						<NavLink to="/"> Simple blog app</NavLink>{' '}
					</Logotype>
					<AuthStatus />
				</NavBar>
			</Row>
		</Container>
	);
};
