import { connect } from 'react-redux';
import AddComment from '../../components/AddComment/AddComment';
import { ThunkDispatch } from 'redux-thunk';
import { StoreState } from '../../types';
import { addComment } from '../../store/reducers/articles/comments/commentsActions';

const dispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
	setComment: (article: string, message: string, token: string) => dispatch(addComment(article, message, token)),
});

const stateToProps = (state: StoreState, ownProps: any) => {
	return {
		article: ownProps.article,
		user: state.user,
	};
};

export default connect(stateToProps, dispatchToProps)(AddComment);
