import React, { Component } from 'react';
import FileItem from '../../components/FileItem';
import './Files.css';

class Files extends Component {
  constructor() {
    super();
    this.state = {
      files: [
        { id: 0, name: "file1.mp3", size: 1081 },
        { id: 1, name: "file2.txt", size: 2082 },
        { id: 2, name: "file3.mp4", size: 3084 },
        { id: 3, name: "file4.pdf", size: 4083 },
        { id: 4, name: "file5.png", size: 5085 },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>Files</h1>
        {this.state.files.map((file) => (
          <FileItem
            key={file.id}
            id={file.id}
            name={file.name}
            size={file.size}
          />
        ))}
      </div>
    );
  }
}

export default Files;
