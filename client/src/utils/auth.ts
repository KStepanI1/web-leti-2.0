const authProvider = {
  isAuthenticated: false,
  signin(callback: VoidFunction) {
    authProvider.isAuthenticated = true;
    return callback;
  },
  signout(callback: VoidFunction) {
    authProvider.isAuthenticated = false;
    return callback;
  },
};

export { authProvider };
