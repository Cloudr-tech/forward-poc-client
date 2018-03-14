import React, { Component } from 'react';
import './Upload.css';

class Upload extends Component {
  onClickButton = () => {
    const fileFirstPart = {

    };

    const fileSecondPart = {
      name: `${this.file.name}.part2`
    };

    const reader = new FileReader();
    reader.readAsArrayBuffer(this.file);
    reader.onload = (evt) => {
      const arrayBuffer = reader.result;
      console.log(arrayBuffer);
    }
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
