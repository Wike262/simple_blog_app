import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import Home from '../../pages/Home/Home';
import { getArticles, getArticlesFeed } from '../../store/reducers/articles/articlesActions';

import { StoreState } from '../../types';

const dispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
	articles: () => dispatch(getArticles()),
	articlesFeed: (token: string) => dispatch(getArticlesFeed(token)),
});

const stateToProps = (state: StoreState) => {
	return {
		user: state.user,
	};
};

export default connect(stateToProps, dispatchToProps)(Home);
