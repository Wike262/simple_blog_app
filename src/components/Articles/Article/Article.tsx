import React from 'react';
import { Link } from 'react-router-dom';

import {
	WrapperArticle,
	ArticleMeta,
	ArticlePreview,
	AuthorImage,
	Info,
	TagList,
	Tag,
	FavoriteButton,
} from './ArticleStyles';
import * as types from '../../../types';
import { MdFavorite } from 'react-icons/md';

interface Props {
	article: types.Article;
	favoriteByUser?: types.Article;
	favorited: Function;
	unFavorite: Function;
}

const Article = ({ article, favoriteByUser, favorited, unFavorite }: Props) => {
	const date = new Date(Date.parse(article.updatedAt.toString())).toDateString();
	const handleFavorite = () => {
		if (favoriteByUser === undefined) {
			article.favoritesCount++;
			favorited(article.slug);
		} else {
			article.favoritesCount--;
			unFavorite(article.slug);
		}
	};

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
				<FavoriteButton active={favoriteByUser !== undefined ? true : false} onClick={handleFavorite}>
					<MdFavorite />
					{article.favoritesCount}
				</FavoriteButton>
			</ArticleMeta>
			<ArticlePreview>
				<h1>{article.title || article.slug}</h1>
				<p>{article.description}</p>
				<Link to={{ pathname: `/articles/${article.slug}`, state: { slug: article.slug } }}>
					<span>Read more...</span>
				</Link>

				<TagList>
					{article?.tagList.map((tag: string) => {
						return <Tag key={tag + Math.random()}>{tag}</Tag>;
					})}
				</TagList>
			</ArticlePreview>
		</WrapperArticle>
	);
};

export default Article;
