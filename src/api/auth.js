import client from "./client";
import store from "../store";

export default {
  login: authInfo => {
    return new Promise((resolve, reject) => {
      client
        .post("/auth/sign_in", authInfo)
        .then(res => {
          resolve({
            auth: {
              accessToken: res.headers["access-token"],
              client: res.headers["client"],
              expiry: res.headers["expiry"],
              uid: res.headers["uid"]
            },
            currentUser: res.data && res.data.data
          });
        })
        .catch(err => {
          reject((err.response && err.response.data) || { code: err.message });
        });
    });
  },

  logout: () => {
    return new Promise((resolve, reject) => {
      client
        .delete("/auth/sign_out", { headers: store.getters.authHeaders })
        .then(() => {
          resolve();
        })
        .catch(err => {
          reject((err.response && err.response.data) || { code: err.message });
        });
    });
  }
};
