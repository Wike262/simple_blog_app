import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Articles from '../../containers/ArticlesContainers/ArticlesList';

import { ProfileBanner, Avatar, ArticlesChoose, ArticlesChooseButtons } from './ProfileStyles';
import { User } from '../../types';

interface Props {
	author: User;
	userArticles: Function;
	userFavorite: Function;
}

const Profile = ({ author, userArticles, userFavorite }: Props) => {
	const [activeFeed, setActiveFeed] = React.useState('My articles');
	React.useEffect(() => {
		if (activeFeed === 'My articles') {
			userArticles(author.username, author.token);
		} else userFavorite(author.username, author.token);
	});
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const value = (event.target as HTMLButtonElement).innerHTML;
		setActiveFeed(value);
	};
	return (
		<>
			<ProfileBanner>
				<Avatar src={author.image || 'https://static.productionready.io/images/smiley-cyrus.jpg'} alt="Profile-Avatar" />
				<h2>{author.username}</h2>
			</ProfileBanner>
			<Container>
				<Row>
					<Col md={12}>
						<ArticlesChoose>
							<ArticlesChooseButtons onClick={handleClick} active={activeFeed === 'My articles' ? true : false}>
								My articles
							</ArticlesChooseButtons>
							<ArticlesChooseButtons onClick={handleClick} active={activeFeed === 'Favorited articles' ? true : false}>
								Favorited articles
							</ArticlesChooseButtons>
						</ArticlesChoose>
						<Articles />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Profile;
