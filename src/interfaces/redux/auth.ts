import {LOGIN_GUEST, LOGOUT_GUEST} from '../../redux/actions/auth';

export interface IAuthState {
  guestLogged: boolean;
}

export type AuthAction = SetGuestLogin | SetGuestLogout;

export interface SetGuestLogin {
  type: typeof LOGIN_GUEST;
  payload: boolean;
}

export interface SetGuestLogout {
  type: typeof LOGOUT_GUEST;
  payload: boolean;
}
