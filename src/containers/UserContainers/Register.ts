import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { register } from '../../store/reducers/user/userUtils';

import Register from '../../pages/Register/Register';
import { StoreState } from '../../types';

const stateToProps = (state: StoreState) => {
	return {
		user: state.user,
	};
};

const dispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
	register: (username: string, email: string, password: string) => {
		dispatch(register(username, email, password));
	},
});

export default connect(stateToProps, dispatchToProps)(Register);
