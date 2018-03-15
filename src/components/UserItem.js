import React from 'react';

const UserItem = props => (
  <div>{props.hostname} {props.ip} {props.size}</div>
);

export default UserItem;
