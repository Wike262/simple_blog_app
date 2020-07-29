import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import Articles from '../../containers/ArticlesContainers/ArticlesList';

import { HelloBanner, Logotype, ArticlesChoose, ArticlesChooseButtons } from './HomeStyles';
import { User } from '../../types';

interface Props {
	articles: Function;
	articlesFeed: Function;
	user: User;
}

const Home = ({ articles, articlesFeed, user }: Props) => {
	React.useEffect(() => {
		if (activeFeed === 'Your Feed') {
			articlesFeed(user.token);
		} else articles();
	});
	const [activeFeed, setActiveFeed] = React.useState('Global Feed');

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const value = (event.target as HTMLButtonElement).innerHTML;
		if (value === 'Your Feed') {
			if (!user.token) return <Redirect to="/login" />;
		}
		setActiveFeed(value);
	};

	return (
		<>
			<HelloBanner>
				<Logotype>Simble blog app</Logotype>
				<p>A place to share your knowledge</p>
			</HelloBanner>
			<Container>
				<Row>
					<ArticlesChoose>
						<ArticlesChooseButtons onClick={handleClick} active={activeFeed === 'Your Feed' ? true : false}>
							Your Feed
						</ArticlesChooseButtons>
						<ArticlesChooseButtons onClick={handleClick} active={activeFeed === 'Global Feed' ? true : false}>
							Global Feed
						</ArticlesChooseButtons>
					</ArticlesChoose>
					<Articles />
				</Row>
			</Container>
		</>
	);
};

export default Home;
