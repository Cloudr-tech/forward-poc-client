import React, { Component } from 'react';
import './Upload.css';
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
  uploadBtn: {
    width: '45%',
    heigth: 20,
    padding: 0,
    margin: '1%',
    float: 'right',
    background: 'rgba(0, 0, 0, 0)',
    overflow: 'hidden',
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '45%',
    display: 'none',
  },
  chooseBtn: {
    width: '45%',
    heigth: 20,
    padding: 0,
    margin: '1%',
    float: 'left',
  },
}

class Upload extends Component {
  onClickButton = () => {
    console.log(this.file);
    this.props.upload({ name: this.file.name, size: this.file.size, type: this.file.type });
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
      <div className='UploadBtnContainer'>
        <RaisedButton
          label="Choose file"
          labelPosition="before"
          containerElement="label"
          primary={true}
          labelStyle={{ fontSize: '10px', padding: 0, overflow: 'hidden'}}
          style={styles.chooseBtn}
        >
         <input 
          type="file"
          style={styles.exampleImageInput}
          onChange={(e) => {this.handleFileChange(e.target.files);}}  
        />
        </RaisedButton>
        <RaisedButton
          style={styles.uploadBtn}
          label="Upload"
          labelStyle={{ fontSize: '10px', padding: 0, overflow: 'hidden'}}
          primary={true}
          labelPosition="before"
          containerElement="label"
          onClick={this.onClickButton}
        />
      </div>
    );
  }
}

export default Upload;
