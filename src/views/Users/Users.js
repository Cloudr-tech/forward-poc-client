import React, { Component } from 'react';
import UserItem from '../../components/UserItem';
import './Users.css';

class Users extends Component {
  componentDidMount = () => {
    setInterval(() => {
      this.props.getUsers()
    }, 1000);
  }

  render() {
    return (
      <div className='RightBarContainer'>
        <h1>Informations<br/>utilisateur</h1>
        <hr className='UserDelim'/>
        <div className='UsersConnected'>
        {this.props.users.map((user) => (
          <UserItem
            key={user._id}
            hostname={user.hostname}
            ip={user.ip}
            size={user.storageLeft}
          />
        ))}
        </div>
      </div>
    );
  }
}

export default Users;
