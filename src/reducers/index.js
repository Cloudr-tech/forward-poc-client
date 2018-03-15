import { combineReducers } from 'redux';

import UploadReducer from './UploadReducer';
import UsersReducer from './UsersReducer';

export default combineReducers({
  upload: UploadReducer,
  users: UsersReducer,
});
