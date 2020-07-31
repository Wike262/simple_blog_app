import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { updateUser } from '../../store/reducers/user/userUtils';

import Settings from '../../pages/Settings/Settings';
import { User, StoreState } from '../../types';

const stateToProps = (state: StoreState) => {
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
