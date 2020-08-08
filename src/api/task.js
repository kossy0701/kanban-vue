import client from "./client";
import store from "../store";

export default {
  getTasks: () => {
    return new Promise((resolve, reject) => {
      client
        .get("/tasks", { headers: store.getters.authHeaders })
        .then(res => resolve({ tasks: res }))
        .catch(err => {
          reject(new Error(err.response.data.message || err.message));
        });
    });
  },

  addTask: params => {
    return new Promise((resolve, reject) => {
      client
        .post("/tasks", { task: params }, { headers: store.state.authHeaders })
        .then(res => resolve(res.data))
        .catch(err => {
          reject(new Error(err.response.data.message || err.message));
        });
    });
  },

  updateTask: (params, taskId) => {
    return new Promise((resolve, reject) => {
      client
        .patch(
          `/tasks/${taskId}`,
          { task: params },
          { headers: store.state.authHeaders }
        )
        .then(() => resolve())
        .catch(err => {
          reject(new Error(err.response.data.message || err.message));
        });
    });
  },

  removeTask: (params, taskId) => {
    return new Promise((resolve, reject) => {
      client
        .delete(`/tasks/${taskId}`, { headers: store.state.authHeaders })
        .then(() => resolve())
        .catch(err => {
          reject(new Error(err.response.data.message || err.message));
        });
    });
  }
};
