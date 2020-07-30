import { connect } from 'react-redux';
import Articles from '../../components/Articles/Articles';
import { StoreState } from '../../types';
import { ThunkDispatch } from 'redux-thunk';
import { addArticleToFavorite, removeArticleFromFavoritre } from '../../store/reducers/user/userActions';

const stateToProps = (state: StoreState) => {
	return {
		articles: state.articles.articles,
		loading: state.articles.loading,
		user: state.user,
	};
};

const dispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
	favorited: (token: string) => (articleSlug: string) => dispatch(addArticleToFavorite(articleSlug, token)),
	unFavorite: (token: string) => (articleSlug: string) => dispatch(removeArticleFromFavoritre(articleSlug, token)),
});

export default connect(stateToProps, dispatchToProps)(Articles);
