import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

Vue.use(Vuex);

const state = {
  auth: {
    accessToken: localStorage.accessToken,
    client: localStorage.client,
    expiry: localStorage.expiry,
    uid: localStorage.uid
  },
  board: {
    tasks: []
  },
  currentUser: null
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state,
  getters,
  actions,
  mutations
});
