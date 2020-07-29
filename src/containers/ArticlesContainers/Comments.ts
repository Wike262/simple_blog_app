import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import Comments from '../../components/Comments/Comments';
import { deleteComment } from '../../store/reducers/articles/comments/commentsActions';
import { StoreState, Article } from '../../types';

const getArticle = (articles: Array<Article>, slug: string) => {
	return articles.find((item) => item.slug === slug)!;
};

const stateToProps = (state: StoreState, ownProps: any) => {
	return {
		comments: getArticle(state.articles.articles, ownProps.article)?.comments?.comments,
		user: state.user,
		articleSlug: ownProps.article,
	};
};

const dispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
	remove: (articleSlug: string, commentId: string, token: string) =>
		dispatch(deleteComment(articleSlug, commentId, token)),
});

export default connect(stateToProps, dispatchToProps)(Comments);
