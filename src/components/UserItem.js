import React from 'react';

const UserItem = props => (
  <div>
    <i className='fa fa-circle loginIcon'/>  
    <div className='UserItem'>
      <div>{props.hostname} - {props.size}</div>
      <span>{props.ip}</span>
    </div>
  </div>
);

export default UserItem;
