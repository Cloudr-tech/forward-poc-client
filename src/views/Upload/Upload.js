import React, { Component } from 'react';
import Axios from 'axios';
import './Upload.css';
import RaisedButton from 'material-ui/RaisedButton';
import UploadModal from '../../components/UploadModal';

const styles = {
  uploadBtn: {
    width: '45%',
    heigth: 20,
    padding: 0,
    margin: '1%',
    float: 'right',
    background: 'rgba(0, 0, 0, 0)',
    color: 'white',
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
    color: 'white',
    display: 'none',
  },
  chooseBtn: {
    width: '45%',
    heigth: 20,
    padding: 0,
    margin: '1%',
    color: 'white',
    float: 'left',
  },
}

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUploading: false,
      current: 0,
      total: 0,
      string: "",
    };
  }

  onClickButton = () => {
    console.log(this.file);
    if (this.file != null) {
      this.sendFileToSocket(this.file);
    }
  }

  sendFilesToDaemons = (file, name) => {
    return new Promise((resolve, reject) => {
      for (let id in this.props.daemons) {
        const daemon = this.props.daemons[id];
        console.log(daemon);
        if ((new Date() / 1000 - daemon.timeStamp) > 10) {
          continue;
        }

        console.log(`upload to ${daemon.hostname}`);
        this.setState({ string: `Envoi du fichier ${file} à ${daemon.hostname}`, current: 0, total: 0 });
        Axios(`http://${daemon.ip}:4242/upload`, {
          method: 'POST',
          data: {
            name: name,
            dataBuffer: file,
          },
          onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            this.setState({ current: loaded, total });
          },
        })
        .catch(err => {
          console.log(err);
        });
      }
      resolve(true);
    });
  }

  sendFileToSocket = (file) => {
    this.setState({ isUploading: true, string: "Lecture du fichier" });
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.onload = (evt) => {
      const dataBuffer = new Int8Array(fileReader.result);
      const send = [];
      this.setState({ string: "Création et séparation du fichier", total: dataBuffer.length });
      for (let to in dataBuffer) {
        send.push(dataBuffer[to]);
        this.setState({ current: to });
      }

      const sendToOne = send.slice(0, this.file.size / 2);
      const sendToTwo = send.slice(this.file.size / 2);

      this.sendFilesToDaemons(sendToOne, `${this.file.name}.part1`)
      .then(_ => {
        return this.sendFilesToDaemons(sendToTwo, `${this.file.name}.part2`);
      })
      .then(_ => {
        this.setState({ isUploading: false, current: 0, total: 0 });
      });
    }
  }

  handleFileChange = (files) => {
    this.file = files[0];
  }

  render() {
    return (
      <div className='UploadBtnContainer'>
        <UploadModal
          open={this.state.isUploading}
          current={(this.state.current / this.state.total) * 100 || 0}
          string={this.state.string}
        />
        <RaisedButton
          backgroundColor="#fff"
          label="Choose file"
          labelPosition="before"
          containerElement="label"
          labelStyle={{ fontSize: '10px', padding: 0, overflow: 'hidden', color: '#16d267', fontWeight: 'bold'}}
          style={styles.chooseBtn}
        >
         <input
          type="file"
          style={styles.exampleImageInput}
          onChange={(e) => {this.handleFileChange(e.target.files);}}
        />
        </RaisedButton>
        <RaisedButton
          backgroundColor="#fff"
          style={styles.uploadBtn}
          label="Upload"
          labelStyle={{ fontSize: '10px', padding: 0, overflow: 'hidden', color: '#16d267', fontWeight: 'bold'}}
          labelPosition="before"
          containerElement="label"
          onClick={this.onClickButton}
        />
      </div>
    );
  }
}

export default Upload;
