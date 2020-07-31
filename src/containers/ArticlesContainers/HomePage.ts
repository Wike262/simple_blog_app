import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import Home from '../../pages/Home/Home';
import { getArticles, getArticlesFeed, getArticlesByTag } from '../../store/reducers/articles/articlesUtils';

import { StoreState } from '../../types';

const dispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
	setArticles: (token: string) => dispatch(getArticles(token)),
	setArticlesFeed: (token: string) => dispatch(getArticlesFeed(token)),
	setArticlesByTag: (tag: string) => dispatch(getArticlesByTag(tag)),
});

const stateToProps = (state: StoreState) => {
	return {
		userToken: state.user.token,
	};
};

export default connect(stateToProps, dispatchToProps)(Home);
