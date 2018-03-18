import React, { Component } from 'react';
import { fileConvertSize } from '../../helpers/helpers';
import './Storage.css';

class Storage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalAvailableStorage: 0,
      totalUsedStorage: 0,
    };
  }

  getTotalAvailableStorage = users => {
    let total = 0;
    for (let user in users) {
      total += users[user].storageLeft;
    }
    if (this.state.totalAvailableStorage !== total) {
      this.setState({ totalAvailableStorage: total });
    }
  }

  getTotalUsedStorage = files => {
    let total = 0;
    for (let file in files) {
      total += files[file].size;
    }
    if (this.state.totalUsedStorage !== total) {
      this.setState({ totalUsedStorage: total });
    }
  }

  getPercentUsage = () => {
    console.log(Math.round(this.state.totalUsedStorage / this.state.totalAvailableStorage) * 100);
    return Math.round((this.state.totalUsedStorage / this.state.totalAvailableStorage) * 100);
  }

  componentWillUpdate = (nextProps) => {
    this.getTotalAvailableStorage(nextProps.users);
    this.getTotalUsedStorage(nextProps.files);
  }

  render() {
    return (
      <div className='storageContainer'>
        Espace utilisé {fileConvertSize(this.state.totalUsedStorage)} / {fileConvertSize(this.state.totalAvailableStorage)}<br/>
        <div className='totalSpace'>
          <div style={{width: this.getPercentUsage(), background: 'white', height: '100%'}}/>
        </div>
      </div>
    );
  }
}

export default Storage;
