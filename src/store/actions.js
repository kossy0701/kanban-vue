import * as types from "./mutation-types";
import { Auth } from "../api";

export default {
  login: ({ commit }, authInfo) => {
    return Auth.login(authInfo)
      .then(({ auth, currentUser }) => {
        commit(types.AUTH_LOGIN, auth);
        localStorage.accessToken = auth.accessToken;
        localStorage.client = auth.client;
        localStorage.expiry = auth.expiry;
        localStorage.uid = auth.uid;
        commit(types.SET_CURRENT_USER, currentUser);
      })
      .catch(err => {
        throw err;
      });
  },

  logout: ({ commit }) => {
    return Auth.logout()
      .then(() => {
        commit(types.AUTH_LOGOUT);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("client");
        localStorage.removeItem("expiry");
        localStorage.removeItem("uid");
        commit(types.SET_CURRENT_USER, null);
      })
      .catch(err => {
        throw err;
      });
  }
};
