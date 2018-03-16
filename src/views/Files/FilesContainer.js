import { connect } from 'react-redux';
import { getFilesAction } from '../../actions/UploadActions';
import Files from './Files';

const mapStateToProps = state => ({
  files: state.upload.files,
});

const mapDispatchToProps = dispatch => ({
  getFiles: () => {
    dispatch(getFilesAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Files);
