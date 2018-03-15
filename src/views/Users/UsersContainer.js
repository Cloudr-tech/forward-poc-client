import { connect } from 'react-redux';
import { getUsersAction } from '../../actions/UsersActions';
import Users from './Users';

const mapStateToProps = state => ({
  users: state.users.users,
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => {
    dispatch(getUsersAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
