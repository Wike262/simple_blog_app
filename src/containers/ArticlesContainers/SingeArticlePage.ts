import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import SingleArticle from '../../pages/SingleArticle/SingleArticle';

import { getArticles, getArticlesFeed } from '../../store/reducers/articles/articlesActions';
import { getComments } from '../../store/reducers/articles/comments/commentsActions';
import {
	addArticleToFavorite,
	removeArticleFromFavoritre,
	followUser,
	unFollowUser,
} from '../../store/reducers/user/userActions';

import { StoreState, Article } from '../../types';

const dispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
	articles: () => dispatch(getArticles()),
	articlesFeed: (token: string) => dispatch(getArticlesFeed(token)),
	setComments: (article: string) => dispatch(getComments(article)),
	favorited: (articleSlug: string, token: string) => dispatch(addArticleToFavorite(articleSlug, token)),
	unFavorite: (articleSlug: string, token: string) => dispatch(removeArticleFromFavoritre(articleSlug, token)),
	follow: (username: string, token: string) => dispatch(followUser(username, token)),
	unFollow: (username: string, token: string) => dispatch(unFollowUser(username, token)),
});

const getArticle = (articles: Array<Article>, slug: string) => {
	return articles.find((item) => item.slug === slug)!;
};

const stateToProps = (state: StoreState, ownProps: any) => {
	return {
		article: getArticle(state.articles.articles, ownProps.location.state.slug),
		user: state.user,
	};
};

export default connect(stateToProps, dispatchToProps)(SingleArticle);
