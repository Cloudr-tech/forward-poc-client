import React, { Component } from 'react';
import Axios from 'axios';
import uuidv4 from 'uuid/v4';
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

  sendFilesToDaemons = (file, daemon, name) => {
    return new Promise(async (resolve, reject) => {
      this.setState({ string: `Envoi du fichier ${name} à ${daemon.hostname}`, current: 0, total: 0 });
      await Axios(`http://${daemon.ip}:4242/upload`, {
        method: 'POST',
        data: {
          name: name,
          dataBuffer: file,
        },
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          this.setState({ current: loaded, total });
        },
      });
      resolve(true);
    });
  }

  sendFileToSocket = (file) => {
    this.setState({ isUploading: true, string: "Lecture du fichier" });
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.onload = async (evt) => {
      const dataBuffer = new Int8Array(fileReader.result);
      const dataArraySend = [];
      const partOneDaemonOne = this.props.daemons[0];
      const partOneDaemonTwo = this.props.daemons[1];
      const partTwoDaemonOne = this.props.daemons[2];
      const partTwoDaemonTwo = this.props.daemons[3];

      this.setState({ string: "Création et séparation du fichier" });
      for (let to in dataBuffer) {
        dataArraySend.push(dataBuffer[to]);
      }

      const sendToOne = dataArraySend.slice(0, this.file.size / 2);
      const sendToTwo = dataArraySend.slice(this.file.size / 2);
      const fileSlug = uuidv4();
      await this.sendFilesToDaemons(sendToOne, partOneDaemonOne, `${fileSlug}.part1`);
      await this.sendFilesToDaemons(sendToOne, partOneDaemonTwo, `${fileSlug}.part1`);
      await this.sendFilesToDaemons(sendToTwo, partTwoDaemonOne, `${fileSlug}.part2`);
      await this.sendFilesToDaemons(sendToTwo, partTwoDaemonTwo, `${fileSlug}.part2`);

      const idArrayPart1 = [this.props.daemons[0]._id, this.props.daemons[1]._id];
      const idArrayPart2 = [this.props.daemons[2]._id, this.props.daemons[3]._id];

      this.props.upload({
        name: this.file.name,
        size: this.file.size,
        type: this.file.type,
        uid: fileSlug,
        partOne: idArrayPart1,
        partTwo: idArrayPart2,
      });
      this.setState({ isUploading: false, current: 0, total: 0 });
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
