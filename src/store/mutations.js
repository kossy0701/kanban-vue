import * as types from "./mutation-types";

export default {
  [types.AUTH_LOGIN](state, payload) {
    state.auth = payload;
  },

  [types.AUTH_LOGOUT](state) {
    state.auth = {
      accessToken: null,
      client: null,
      expiry: null,
      uid: null
    };
  },

  [types.SET_CURRENT_USER](state, payload) {
    state.currentUser = payload;
  }
};
