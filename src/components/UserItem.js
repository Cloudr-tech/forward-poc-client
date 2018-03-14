import React from 'react';

const UserItem = props => (
  <div>{props.id} {props.ip} {props.size}</div>
);

export default UserItem;
