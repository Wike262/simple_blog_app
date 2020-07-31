import { connect } from 'react-redux';

import { ThunkDispatch } from 'redux-thunk';
import { loginWithToken } from '../store/reducers/user/userUtils';
import App from '../pages/App';

const dispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
	login: (token: string) => dispatch(loginWithToken(token)),
});

export default connect(null, dispatchToProps)(App);
