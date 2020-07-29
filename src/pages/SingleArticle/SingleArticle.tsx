import React from 'react';
import { Link } from 'react-router-dom';
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
} from './SingleArticleStyles';
import AddComment from '../../containers/ArticlesContainers/AddComment';
import Comments from '../../containers/ArticlesContainers/Comments';
import * as types from '../../types';

interface Props {
	article: types.Article;
	user: types.User;
	setComments: Function;
}

const Article = ({ article, user, setComments }: Props) => {
	React.useEffect(() => {
		if (article.comments === undefined) setComments(article.slug);
	});
	const date = new Date(Date.parse(article.updatedAt.toString())).toDateString();
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
						</ArticleMeta>
					</Row>
				</Container>
			</ArticleBanner>
			<Container>
				<Row>
					<WrapperArticle>
						<ArticleContent>
							<p>{article.description}</p>
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
