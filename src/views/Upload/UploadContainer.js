import { connect } from 'react-redux';
import { uploadFileAction } from '../../actions/UploadActions';
import Upload from './Upload';

const mapStateToProps = state => ({
  daemons: state.users.users,
});

const mapDispatchToProps = dispatch => ({
  upload: (file) => {
    dispatch(uploadFileAction(file));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
