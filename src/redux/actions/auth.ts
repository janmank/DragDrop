export const LOGIN_GUEST = 'LOGIN_GUEST';
export const LOGOUT_GUEST = 'LOGOUT_GUEST';

export const guestLogin = () => ({
  type: LOGIN_GUEST,
});

export const guestLogout = () => ({
  type: LOGOUT_GUEST,
});
