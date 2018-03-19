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
    if (this.file != null) {
      this.sendFileToSocket(this.file);
    }
  }

  sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  sendFileToSocket = (file) => {
    // const ws = new WebSocket('ws://10.26.111.215:4242');
    // const fileReader = new FileReader();
    // ws.onopen = () => {
    //   fileReader.readAsArrayBuffer(file);
    //   fileReader.onload = async (evt) => {
    //     const dataBuffer = new Int8Array(fileReader.result);
    //     const send = [];
    //     let totalLength = 0;
    //     for (let to in dataBuffer) {
    //       send.push(dataBuffer[to]);
    //       if (send.length >= 16000) {
    //         ws.send(JSON.stringify({ type: "upload", name: file.name, data: send }));
    //         send.length = 0;
    //         totalLength += 16000;
    //         console.log(`Sending ${totalLength / file.size * 100} %`)
    //         await this.sleep(10);
    //       }
    //     }
        this.props.upload({ name: this.file.name, size: this.file.size, type: this.file.type });
    //   }
    // }
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
