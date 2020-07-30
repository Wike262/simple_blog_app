import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { getUserArticles, getUserFavoritedArticles } from '../store/reducers/articles/articlesActions';

import Profile from '../pages/Profile/Profile';
import { StoreState } from '../types';

const stateToProps = (state: StoreState, ownProps: any) => {
	console.log(ownProps);
	return {
		author: ownProps.location.state.author,
	};
};

const dispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
	userArticles: (username: string, token: string) => dispatch(getUserArticles(username, token)),
	userFavorite: (username: string, token: string) => dispatch(getUserFavoritedArticles(username, token)),
});

export default connect(stateToProps, dispatchToProps)(Profile);
