import {IRootState} from '../../interfaces/redux/store';

export const selectGuestLoged = (state: IRootState) =>
  state.authReducer.guestLogged;
