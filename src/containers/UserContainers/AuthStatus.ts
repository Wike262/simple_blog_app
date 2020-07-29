import { connect } from 'react-redux';
import AuthStatus from '../../components/NavBar/AuthStatus/AuthStatus';
import { StoreState } from '../../types';

const stateToProps = (state: StoreState) => {
	return {
		user: state.user,
	};
};

export default connect(stateToProps)(AuthStatus);
