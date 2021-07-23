class Auth {
  constructor() {
    this.authenticated = false;
  }

  isAuthenticated = () => {
    return this.authenticated;
  };

  logIn = () => {
    this.authenticated = true;
    localStorage.setItem("authed", this.authenticated)
  };

  logOut = () => {
    this.authenticated = false;
    localStorage.setItem("authed", this.authenticated)
  };
}

export const auth = new Auth();
