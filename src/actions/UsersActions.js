import Axios from 'axios';
import config from '../helpers/config';

export const GET_USERS_ACTION = 'GET_USERS_ACTION';

export const getUsers = users => ({
  type: GET_USERS_ACTION,
  users,
});

export const getUsersAction = () => {
  return (dispatch) => {
    Axios(`${config.api.url}/daemons`)
    .then(res => {
      dispatch(getUsers(res.data.data));
    })
    .catch(err => {
      console.log(err);
    });
  }
};
