import config from '../helpers/config';

export const GET_USERS_ACTION = 'GET_USERS_ACTION';

export const getUsers = users => ({
  type: GET_USERS_ACTION,
  users,
});

// Update to send file info to the API
export const getUsersAction = () => {
  return (dispatch) => {
    fetch(`${config.api.url}/daemons`)
    .then(results => {
      return results.json();
    })
    .then(res => {
      dispatch(getUsers(res.data));
    })
    .catch(err => {
      console.log(err);
    });
  }
};
