import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import ArticleCreate from '../../pages/ArticleCreate/ArticleCreate';
import { StoreState, Article } from '../../types';
import { addArticle, updateArticle } from '../../store/reducers/articles/articlesUtils';

const stateToProps = (state: StoreState, ownProps: any) => {
	return {
		articles: state.articles.articles,
		articleToUpdate: ownProps?.location?.state?.article,
		user: state.user,
	};
};

const dispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
	create: (article: Article, token: string) => dispatch(addArticle(article, token)),
	update: (article: Article, token: string) => dispatch(updateArticle(article, token)),
});

export default connect(stateToProps, dispatchToProps)(ArticleCreate);
