import { connect } from 'react-redux';
import { uploadAction } from '../../actions/UploadActions';
import Upload from './Upload';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  upload: (file) => {
    dispatch(uploadAction(file));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
