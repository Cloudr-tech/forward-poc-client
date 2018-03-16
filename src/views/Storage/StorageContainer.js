import { connect } from 'react-redux';
import Storage from './Storage';

const mapStateToProps = state => ({
  files: state.upload.files,
  users: state.users.users,
});

export default connect(mapStateToProps)(Storage);
