import React from 'react';

import SingleArticle from './Article/Article';
import { Article, User } from '../../types';

interface Props {
	articles: Array<Article>;
	loading: boolean;
	user: User;
	favorited: Function;
	unFavorite: Function;
}

const Articles = ({ articles, loading, favorited, unFavorite, user }: Props) => {
	if (loading) return <p>Loading articles...</p>;
	if (articles.length === 0) return <p>Dosen't have an articles</p>;
	return (
		<>
			{articles.map((item) => (
				<SingleArticle
					key={item.slug}
					article={item}
					favoriteByUser={user.favorites?.find((acticle) => acticle?.slug === item.slug)}
					favorited={favorited(user.token)}
					unFavorite={unFavorite(user.token)}
				/>
			))}
		</>
	);
};

export default Articles;
