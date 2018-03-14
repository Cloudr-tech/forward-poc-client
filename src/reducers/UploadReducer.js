import { UPLOAD_ACTION } from '../actions/UploadActions';

const initialState = {
  files: [],
};

const UploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_ACTION:
      return {
        ...state,
        files: [...state.files, action.name],
      };
    default:
      return state;
  }
};

export default UploadReducer;
