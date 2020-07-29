import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { updateUser } from '../../store/reducers/user/userActions';

import Settings from '../../pages/Settings/Settings';
import { User } from '../../types';

const stateToProps = (state: any) => {
	return {
		user: state.user,
	};
};

const dispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
	update: (user: User, token: string) => {
		dispatch(updateUser(user, token));
	},
});

export default connect(stateToProps, dispatchToProps)(Settings);
