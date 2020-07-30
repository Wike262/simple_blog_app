import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import Articles from '../../containers/ArticlesContainers/ArticlesList';

import { HelloBanner, Logotype, ArticlesChoose, ArticlesChooseButtons } from './HomeStyles';

interface Props {
	userToken: string;
	setArticles: Function;
	setArticlesFeed: Function;
}

const Home = ({ userToken, setArticles, setArticlesFeed }: Props) => {
	React.useEffect(() => {
		if (activeFeed === 'Your Feed') {
			setArticlesFeed(userToken);
		} else setArticles(userToken);
	});
	const [activeFeed, setActiveFeed] = React.useState('Global Feed');

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const value = (event.target as HTMLButtonElement).innerHTML;
		if (value === 'Your Feed') {
			if (!userToken) return <Redirect to="/login" />;
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
