import { connect } from 'react-redux';
import Files from './Files';

const mapStateToProps = state => ({
  files: state.upload.files,
});

export default connect(mapStateToProps)(Files);
