export default {
  authHeaders: state => {
    return {
      "access-token": state.auth.accessToken,
      client: state.auth.client,
      expiry: state.auth.expiry,
      uid: state.auth.uid
    };
  },

  getTaskById: state => id => {
    const tasklists = [];
    state.board.tasks.forEach(task => {
      tasklists.push(...task.items);
    });
    return tasklists.find(task => task.id === id);
  }
};
