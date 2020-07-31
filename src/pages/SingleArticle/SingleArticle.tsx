import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

import {
	WrapperArticle,
	ArticleMeta,
	AuthorImage,
	Info,
	TagList,
	ArticleBanner,
	ArticleTitle,
	ArticleContent,
	CommentsWrapper,
	FavoriteButton,
	FollowingButton,
	DeleteButton,
	EditButton,
} from './SingleArticleStyles';
import { MdFavorite } from 'react-icons/md';

import AddComment from '../../containers/ArticlesContainers/AddComment';
import Comments from '../../containers/ArticlesContainers/Comments';
import * as types from '../../types';

interface Props {
	article: types.Article;
	user: types.User;
	setComments: Function;
	favorited: Function;
	unFavorite: Function;
	follow: Function;
	unFollow: Function;
	remove: Function;
}

const Article = ({ article, user, setComments, favorited, unFavorite, follow, unFollow, remove }: Props) => {
	const history = useHistory();
	React.useEffect(() => {
		if (article.comments === undefined) setComments(article.slug);
	});
	const date = new Date(Date.parse(article.updatedAt.toString())).toDateString();
	let favoriteByUser = user.favorites?.find((item) => item?.slug === article.slug);

	const handleFavorite = () => {
		if (favoriteByUser === undefined) {
			article.favoritesCount++;
			favorited(user.token, article.slug);
		} else {
			article.favoritesCount--;
			unFavorite(user.token, article.slug);
		}
	};

	const handleFollow = () => {
		if (!article.author.following) {
			article.author.following = true;
			follow(article.author.username, user.token);
		} else {
			article.author.following = false;
			unFollow(article.author.username, user.token);
		}
	};

	const handleDelete = () => {
		remove(article.slug, user.token);
		history.goBack();
	};

	return (
		<>
			<ArticleBanner>
				<Container>
					<Row>
						<ArticleTitle>{article.title || article.slug}</ArticleTitle>
						<ArticleMeta>
							<Link to={`/articles/${article.slug}`}>
								<AuthorImage src={article.author.image} alt="Author-Avatar" />
							</Link>
							<Info>
								<Link to={`/profiles/${article.author.username}`}>{article.author.username}</Link>
								<p>{date}</p>
							</Info>
							{article.author.username === user.username ? (
								<DeleteButton onClick={handleDelete}>Delete Article </DeleteButton>
							) : (
								<FollowingButton active={article.author.following} onClick={handleFollow}>
									<MdFavorite />
									{article.author.following ? `Unfollow ${article.author.username}` : `Follow ${article.author.username}`}
								</FollowingButton>
							)}
							{article.author.username === user.username ? (
								<EditButton>
									<Link to={{ pathname: '/article-create', state: { article } }}>Edit Article </Link>
								</EditButton>
							) : (
								<FavoriteButton active={favoriteByUser !== undefined ? true : false} onClick={handleFavorite}>
									<MdFavorite />
									{favoriteByUser !== undefined ? 'Unfavorite Article ' : 'Favortie Article '}
									{article.favoritesCount}
								</FavoriteButton>
							)}
						</ArticleMeta>
					</Row>
				</Container>
			</ArticleBanner>
			<Container>
				<Row>
					<WrapperArticle>
						<ArticleContent>
							<p>{article.body}</p>
							<TagList></TagList>
						</ArticleContent>
						<CommentsWrapper>
							{user.token ? (
								<AddComment article={article.slug} />
							) : (
								<p>
									<Link to="/login">Sing in</Link> or <Link to="/register">Sing up</Link> to add comment
								</p>
							)}
							<Comments article={article.slug} />
						</CommentsWrapper>
					</WrapperArticle>
				</Row>
			</Container>
		</>
	);
};

export default Article;
