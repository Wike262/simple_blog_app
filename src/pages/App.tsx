import React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

import NavBar from '../components/NavBar/NavBar';

import Login from '../containers/UserContainers/Login';
import Register from '../containers/UserContainers/Register';
import Home from '../containers/ArticlesContainers/HomePage';
import SingleArticle from '../containers/ArticlesContainers/SingeArticlePage';

import { Page } from './AppStyles';

import { loginWithToken } from '../store/reducers/user/userActions';

import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
	login: Function;
}

function getCookie(name: string) {
	name = name + '=';
	var decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}
	return '';
}

class App extends React.Component<Props> {
	componentDidMount = () => {
		if (getCookie('token')) return this.props.login(getCookie('token'));
	};

	render() {
		return (
			<Router>
				<NavBar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/articles/:article" component={(props: any) => <SingleArticle {...props} />} />
					<Page>
						<Container>
							<Row>
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

const dispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
	login: (token: string) => dispatch(loginWithToken(token)),
});

export default connect(null, dispatchToProps)(App);
