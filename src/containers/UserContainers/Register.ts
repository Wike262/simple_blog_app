import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { register } from '../../store/reducers/user/userActions';

import Register from '../../pages/Register/Register';

const stateToProp = (state: any) => {
	return {
		user: state.user,
	};
};

const dispatchToProp = (dispatch: ThunkDispatch<{}, {}, any>) => ({
	register: (username: string, email: string, password: string) => {
		dispatch(register(username, email, password));
	},
});

export default connect(stateToProp, dispatchToProp)(Register);
