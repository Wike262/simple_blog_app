import { connect } from 'react-redux';

import { ThunkDispatch } from 'redux-thunk';
import { addArticleToFavorite, removeArticleFromFavoritre } from '../../store/reducers/user/userUtils';
import { getArticles, getArticlesFeed } from '../../store/reducers/articles/articlesUtils';
import Articles from '../../components/Articles/Articles';
import { StoreState } from '../../types';

const stateToProps = (state: StoreState, ownProps: { feed?: string }) => {
	return {
		articles: state.articles.articles,
		feed: ownProps.feed!,
		articlesCount: state.articles.articlesCount,
		loading: state.articles.loading,
		user: state.user,
	};
};

const dispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
	favorited: (token: string) => (articleSlug: string) => dispatch(addArticleToFavorite(articleSlug, token)),
	unFavorite: (token: string) => (articleSlug: string) => dispatch(removeArticleFromFavoritre(articleSlug, token)),
	setArticles: (token: string, page: number) => dispatch(getArticles(token, page)),
	setArticlesFeed: (token: string, page: number) => dispatch(getArticlesFeed(token, page)),
});

export default connect(stateToProps, dispatchToProps)(Articles);
