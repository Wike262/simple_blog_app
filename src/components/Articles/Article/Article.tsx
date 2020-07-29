import React from 'react';
import { Link } from 'react-router-dom';

import { WrapperArticle, ArticleMeta, ArticlePreview, AuthorImage, Info, TagList } from './ArticleStyles';
import * as types from '../../../types';

interface Props {
	article: types.Article;
}

const Article = ({ article }: Props) => {
	const date = new Date(Date.parse(article.updatedAt.toString())).toDateString();
	return (
		<WrapperArticle>
			<ArticleMeta>
				<Link to={`/profiles/${article.author.username}`}>
					<AuthorImage src={article.author.image} alt="Author-Avatar" />
				</Link>
				<Info>
					<Link to={{ pathname: `/profiles/${article.author.username}`, state: { author: article.author } }}>
						{article.author.username}
					</Link>
					<p>{date}</p>
				</Info>
			</ArticleMeta>
			<ArticlePreview>
				<h1>{article.title || article.slug}</h1>
				<p>{article.description}</p>
				<Link to={{ pathname: `/articles/${article.slug}`, state: { slug: article.slug } }}>
					<span>Read more...</span>
				</Link>
				<TagList></TagList>
			</ArticlePreview>
		</WrapperArticle>
	);
};

export default Article;
