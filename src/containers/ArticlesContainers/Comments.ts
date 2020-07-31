import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import Comments from '../../components/Comments/Comments';
import { deleteComment } from '../../store/reducers/articles/comments/commentsUtils';
import { StoreState, Article } from '../../types';

const getArticle = (articles: Array<Article>, slug: string) => {
	return articles.find((item) => item.slug === slug)!;
};

interface ownProps {
	article: string;
}

const stateToProps = (state: StoreState, ownProps: ownProps) => {
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
