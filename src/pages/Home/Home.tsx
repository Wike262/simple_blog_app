import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import Articles from '../../containers/ArticlesContainers/ArticlesList';

import {
	HelloBanner,
	Logotype,
	ArticlesChoose,
	ArticlesChooseButtons,
	TagListWrapper,
	TagList,
	Tag,
} from './HomeStyles';

interface Props {
	userToken: string;
	setArticles: Function;
	setArticlesFeed: Function;
	setArticlesByTag: Function;
}

const Home = ({ userToken, setArticles, setArticlesFeed, setArticlesByTag }: Props) => {
	React.useEffect(() => {
		if (activeFeed === 'Your Feed') {
			setArticlesFeed(userToken);
		} else setArticles(userToken);
		if (tags.length === 0)
			fetch('http://localhost:3000/api/tags')
				.then((response) => response.json())
				.then((result) => {
					console.log(result.tags);
					setTags(result.tags);
				});
	});
	const [activeFeed, setActiveFeed] = React.useState('Global Feed');
	const [tags, setTags] = React.useState([]);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const value = (event.target as HTMLButtonElement).innerHTML;
		if (value === 'Your Feed') {
			if (!userToken) return <Redirect to="/login" />;
		}
		setActiveFeed(value);
	};

	const handleTagChange = (event: React.MouseEvent<HTMLLIElement>) => {
		setArticlesByTag((event.target as HTMLLIElement).innerHTML);
	};
	return (
		<>
			<HelloBanner>
				<Logotype>Simble blog app</Logotype>
				<p>A place to share your knowledge</p>
			</HelloBanner>
			<Container>
				<Row>
					<Col md={12}>
						<ArticlesChoose>
							<ArticlesChooseButtons onClick={handleClick} active={activeFeed === 'Your Feed' ? true : false}>
								Your Feed
							</ArticlesChooseButtons>
							<ArticlesChooseButtons onClick={handleClick} active={activeFeed === 'Global Feed' ? true : false}>
								Global Feed
							</ArticlesChooseButtons>
						</ArticlesChoose>
					</Col>

					<Col md={7}>
						<Articles />
					</Col>
					<Col md={5}>
						<TagListWrapper>
							<h4>Tags</h4>
							<TagList>
								{tags.map((tag: string) => {
									console.log(tag);
									return (
										<Tag key={tag + Math.random()} onClick={handleTagChange}>
											{tag}
										</Tag>
									);
								})}
							</TagList>
						</TagListWrapper>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Home;
