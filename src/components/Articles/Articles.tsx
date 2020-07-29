import React from 'react';

import SingleArticle from './Article/Article';
import { Article } from '../../types';

interface Props {
	articles: Array<Article>;
	loading: boolean;
}

const Articles = ({ articles, loading }: Props) => {
	if (loading) return <p>Loading articles...</p>;
	if (articles.length === 0) return <p>Dosen't have an articles</p>;
	return (
		<>
			{articles.map((item) => (
				<SingleArticle key={item.slug} article={item}></SingleArticle>
			))}
		</>
	);
};

export default Articles;
