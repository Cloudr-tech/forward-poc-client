import { connect } from 'react-redux';
import { uploadAction } from '../../actions/UploadActions';
import Upload from './Upload';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  upload: (name) => {
    dispatch(uploadAction(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
