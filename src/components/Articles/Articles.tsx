import React from 'react';

import { PageButton } from './ArticlesStyles';

import SingleArticle from './Article/Article';
import { Article, User } from '../../types';

interface Props {
	articles: Array<Article>;
	articlesCount: number;
	feed?: string;
	loading: boolean;
	user: User;
	favorite: (token: string) => (articleSlug: string) => void;
	unFavorite: (token: string) => (articleSlug: string) => void;
	setArticles: (token: string, offset: number) => void;
	setArticlesFeed: (token: string, offset: number) => void;
}

const Articles = ({
	articles,
	feed,
	articlesCount,
	loading,
	user,
	favorite,
	unFavorite,
	setArticles,
	setArticlesFeed,
}: Props) => {
	const [currentPage, setCurrentPage] = React.useState(1);

	if (loading) return <p>Loading articles...</p>;
	if (articles.length === 0) return <p>Do not have an articles</p>;

	const handleChangePage = (page: number) => {
		setCurrentPage(page);
		if ((feed = 'Global Feed')) {
			setArticles(user.token, page * 10 - 10);
		} else {
			setArticlesFeed(user.token, page * 10 - 10);
		}
	};

	const Pagination = () => {
		let pages = Math.ceil(articlesCount / 10);
		let pagination = [];

		for (let i = 1; i <= pages; i++) {
			pagination.push(
				<PageButton active={currentPage === i ? true : false} key={i} onClick={(e) => handleChangePage(i)}>
					{i}
				</PageButton>
			);
		}
		if (pages > 1) return <>{pagination}</>;
		return <></>;
	};
	return (
		<>
			{articles.map((item) => (
				<SingleArticle
					key={item.slug}
					article={item}
					favoriteByUser={user.favorites?.find((article) => article?.slug === item.slug)}
					favorite={favorite(user.token)}
					unFavorite={unFavorite(user.token)}
				/>
			))}
			{<Pagination />}
		</>
	);
};

export default Articles;
