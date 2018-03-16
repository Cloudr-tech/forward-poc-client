import { UPLOAD_ACTION, GET_FILES_ACTION } from '../actions/UploadActions';

const initialState = {
  files: [],
};

const UploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_ACTION:
      return {
        ...state,
        files: [...state.files, action.file],
      };
    case GET_FILES_ACTION:
      return {
        ...state,
        files: action.files,
      };
    default:
      return state;
  }
};

export default UploadReducer;
