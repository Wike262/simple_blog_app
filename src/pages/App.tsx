import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

import NavBar from '../components/NavBar/NavBar';

import Login from '../containers/UserContainers/Login';
import Register from '../containers/UserContainers/Register';
import Home from '../containers/ArticlesContainers/HomePage';
import SingleArticle from '../containers/ArticlesContainers/SingeArticlePage';
import ArticleCreate from '../containers/ArticlesContainers/ArticleCreate';
import Settings from '../containers/UserContainers/Settings';
import Profile from '../containers/Profile';

import { Page } from './AppStyles';

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
					<Route path="/articles/:article" component={SingleArticle} />
					<Route path="/profiles/:profile" component={Profile} />
					<Page>
						<Container>
							<Row>
								<Route path="/login" component={Login} />
								<Route path="/register" component={Register} />
								<Route path="/article-create" component={ArticleCreate} />
								<Route path="/settings" component={Settings} />
							</Row>
						</Container>
					</Page>
				</Switch>
			</Router>
		);
	}
}

export default App;
