import React, { Component } from 'react';
import './Upload.css';

class Upload extends Component {
  onClickButton = () => {
    console.log(this.file);
    this.props.upload(this.file.name);
    // const reader = new FileReader();
    // reader.readAsArrayBuffer(this.file);
    // reader.onload = (evt) => {
    //   const arrayBuffer = reader.result;
    //   // const firstPart = arrayBuffer.slice(0, this.file.size / 2);
    //   // const secondPart = arrayBuffer.slice(this.file.size / 2);
    // }
  }

  readSliceOfFile = () => {

  }

  handleFileChange(files) {
    this.file = files[0];
  }

  render() {
    return (
      <div>
        <div>
          <label htmlFor="file">Sélectionner le fichier à envoyer</label><br />
          <input
            onChange={(e) => { this.handleFileChange(e.target.files) }}
            type="file"
            id="file"
            name="file"
          />
        </div>
        <button onClick={this.onClickButton}>Upload</button>
      </div>
    );
  }
}

export default Upload;
