import React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

import NavBar from '../components/NavBar/NavBar';

import Login from '../containers/UserContainers/Login';
import Register from '../containers/UserContainers/Register';
import Home from './Home/Home';
import { Page } from './AppStyles';

import { loginWithToken } from '../store/reducers/user/userActions';

import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
	login: Function;
}

class App extends React.Component<Props> {
	componentDidMount = () => {
		if (localStorage.getItem('token')) return this.props.login(localStorage.getItem('token')!);
	};

	render() {
		return (
			<Router>
				<NavBar />
				<Switch>
					<Page>
						<Container>
							<Row>
								<Route path="/" exact component={Home} />
								<Route path="/login" component={Login} />
								<Route path="/register" component={Register} />
							</Row>
						</Container>
					</Page>
				</Switch>
			</Router>
		);
	}
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
	login: (token: string) => dispatch(loginWithToken(token)),
});

export default connect(null, mapDispatchToProps)(App);
