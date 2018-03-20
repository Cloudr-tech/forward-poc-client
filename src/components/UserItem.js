import React from 'react';
import { fileConvertSize } from '../helpers/helpers.js';

const UserItem = props => (
  <div>
    <i style={{ color: (new Date() / 1000 - props.timestamp) > 10 ? 'red' : 'green' }} className='fa fa-circle loginIcon'/>
    <div className='UserItem'>
      <div>{props.hostname} — {fileConvertSize(props.size)}</div>
      <span>{props.ip}</span>
    </div>
  </div>
);

export default UserItem;
