import React, { Component } from 'react';
import FileItem from '../../components/FileItem';
import './Files.css';

class Files extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='FilesContainer'>
        <div className='FilesHeader'></div>
        <h1 className='FilesTitle'>Files</h1>
        {this.props.files.map((file) => (
          <FileItem
            key={0}
            id={0}
            name={file}
            size={4096}
          />
        ))}
      </div>
    );
  }
}

export default Files;
