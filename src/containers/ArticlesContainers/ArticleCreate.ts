import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import ArticleCreate from '../../pages/ArticleCreate/ArticleCreate';
import { StoreState } from '../../types';
import { addArticle } from '../../store/reducers/articles/articlesActions';

const stateToProps = (state: StoreState) => {
	return {
		articles: state.articles.articles,
		user: state.user,
	};
};

const dispathToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
	create: (title: string, token: string, description?: string, body?: string, tagList?: string[]) =>
		dispatch(addArticle(title, token, description, body, tagList)),
});

export default connect(stateToProps, dispathToProps)(ArticleCreate);
