import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import Home from '../../pages/Home/Home';
import { getArticles, getArticlesFeed } from '../../store/reducers/articles/articlesActions';

import { StoreState } from '../../types';

const dispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
	setArticles: (token: string) => dispatch(getArticles(token)),
	setArticlesFeed: (token: string) => dispatch(getArticlesFeed(token)),
});

const stateToProps = (state: StoreState) => {
	return {
		userToken: state.user.token,
	};
};

export default connect(stateToProps, dispatchToProps)(Home);
