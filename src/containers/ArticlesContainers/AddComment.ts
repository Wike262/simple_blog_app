import { connect } from 'react-redux';
import AddComment from '../../components/AddComment/AddComment';
import { ThunkDispatch } from 'redux-thunk';
import { StoreState } from '../../types';
import { addComment } from '../../store/reducers/articles/comments/commentsUtils';

const dispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
	setComment: (article: string, message: string, token: string) => dispatch(addComment(article, message, token)),
});

interface ownProps {
	article: string;
}

const stateToProps = (state: StoreState, ownProps: ownProps) => {
	return {
		article: ownProps.article,
		user: state.user,
	};
};

export default connect(stateToProps, dispatchToProps)(AddComment);
