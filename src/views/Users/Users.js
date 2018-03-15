import React, { Component } from 'react';
import UserItem from '../../components/UserItem';
import './Users.css';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        { id: 0, hostname: 'MacBook Pro de Elias', ip: "127.0.0.2", sizeLeft: 400000 },
        { id: 1, hostname: 'DESKTOP-991DF', ip: "127.0.0.3", sizeLeft: 500000 },
        { id: 2, hostname: 'desktop-1viivum', ip: "127.0.0.4", sizeLeft: 600000 },
        { id: 3, hostname: 'MacBook Pro de Bobby', ip: "127.0.0.5", sizeLeft: 700000 },
        { id: 4, hostname: 'debian', ip: "127.0.0.6", sizeLeft: 800000 },
      ],
    };
  }

  render() {
    return (
      <div className='RightBarContainer'>
        <h1>Informations<br/>utilisateur</h1>
        <hr className='UserDelim'/>
        <div className='UsersConnected'>
        {this.state.users.map((user) => (
          <UserItem
            key={user.id}
            hostname={user.hostname}
            ip={user.ip}
            size={user.sizeLeft}
          />
        ))}
        </div>
      </div>
    );
  }
}

export default Users;
