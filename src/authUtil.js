export const isLoggedIn = () => (
  !!window.localStorage.getItem('token')
);

export const hasValidToken = () => (
  !!(window.localStorage.expiresIn && window.localStorage.getItem('expiresIn') > Date.now())
);

export const checkAuthStatus = () => (
  !!(isLoggedIn() && hasValidToken())
);
