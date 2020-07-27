import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { login } from '../../store/reducers/user/userActions';

import Login from '../../pages/Login/Login';

const stateToProp = (state: any) => {
	return {
		user: state.user,
	};
};

const dispatchToProp = (dispatch: ThunkDispatch<{}, {}, any>) => ({
	login: (email: string, password: string) => {
		dispatch(login(email, password));
	},
});

export default connect(stateToProp, dispatchToProp)(Login);
