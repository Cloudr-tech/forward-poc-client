import React from 'react';
import { fileConvertSize } from '../helpers/helpers.js';

const UserItem = props => (
  <div>
    <i className='fa fa-circle loginIcon'/>
    <div className='UserItem'>
      <div>{props.hostname} — {fileConvertSize(props.size)}</div>
      <span>{props.ip}</span>
    </div>
  </div>
);

export default UserItem;
