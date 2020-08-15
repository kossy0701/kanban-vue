import { Auth } from "../api";
import store from "../store";

export const authorizeToken = (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.auth || !store.state.auth.accessToken) {
      next({ path: "/login" });
    } else {
      Auth.validateToken()
        .then(currentUser => {
          store.dispatch("setCurrentUser", currentUser);
          next();
        })
        .catch(() => {
          store.dispatch("setCurrentUser", null);
          next({ path: "/login" });
        });
    }
  }
};
