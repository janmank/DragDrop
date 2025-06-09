import {AuthAction, IAuthState} from '../../interfaces/redux/auth';
import {LOGIN_GUEST, LOGOUT_GUEST} from '../actions/auth';

const initialAuthState: IAuthState = {
  guestLogged: false,
};

function authReducer(state = initialAuthState, action: AuthAction): IAuthState {
  switch (action.type) {
    case LOGIN_GUEST:
      return {...state, guestLogged: true};
    case LOGOUT_GUEST:
      return {...state, guestLogged: false};
    default:
      return state;
  }
}

export default authReducer;
