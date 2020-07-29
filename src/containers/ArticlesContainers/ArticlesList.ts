import { connect } from 'react-redux';
import Articles from '../../components/Articles/Articles';
import { StoreState } from '../../types';

const stateToProps = (state: StoreState) => {
	return {
		articles: state.articles.articles,
		loading: state.articles.loading,
	};
};

export default connect(stateToProps)(Articles);
