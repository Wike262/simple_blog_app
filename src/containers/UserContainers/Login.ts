import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { login } from '../../store/reducers/user/userUtils';

import Login from '../../pages/Login/Login';
import { StoreState } from '../../types';

const stateToProps = (state: StoreState) => {
	return {
		user: state.user,
	};
};

const dispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
	login: (email: string, password: string) => {
		dispatch(login(email, password));
	},
});

export default connect(stateToProps, dispatchToProps)(Login);
