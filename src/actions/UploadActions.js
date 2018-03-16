import Axios from 'axios';
import config from '../helpers/config';

export const UPLOAD_ACTION = 'UPLOAD_ACTION';
export const GET_FILES_ACTION = 'GET_FILES_ACTION';

export const uploadAction = file => ({
  type: UPLOAD_ACTION,
  file,
});

export const getAction = files => ({
  type: GET_FILES_ACTION,
  files,
});

export const getFilesAction = () => {
  return (dispatch) => {
    Axios(`${config.api.url}/files`)
    .then(res => {
      dispatch(getAction(res.data.data));
    })
    .catch(err => {
      console.log(err);
    });
  }
};

export const uploadFileAction = data => {
  return (dispatch) => {
    Axios(`${config.api.url}/files`, {
      method: 'PUT',
      data,
    })
    .then(res => {
      dispatch(uploadAction(data));
    })
    .catch(err => {
      console.log(err);
    });
  }
};
