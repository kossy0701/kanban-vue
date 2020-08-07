export default {
  authHeaders: state => {
    return {
      "access-token": state.auth.accessToken,
      client: state.auth.client,
      expiry: state.auth.expiry,
      uid: state.auth.uid
    };
  }
};
