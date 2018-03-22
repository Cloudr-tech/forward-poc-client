import React, { Component } from 'react';
import Axios from 'axios';
import FileItem from '../../components/FileItem';
import {
  Table,
  TableBody,
} from 'material-ui/Table';
import './Files.css';

const style = {
  Table: {
    width: '95%',
    marginTop: '50px',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: '16px',
  }
}

class Files extends Component {
  componentDidMount = () => {
    setInterval(() => {
      this.props.getFiles();
    }, 1000);
  }

  downloadFile = async file => {
    let fileArray = [];

    for (let user in this.props.users) {
      if (file.partOne.includes(this.props.users[user]._id)) {
        const res = await Axios(`http://${this.props.users[user].ip}:4242/download/${file.uid}.part1`);
        fileArray = res.data.data;
        console.log(fileArray);
      }
    }

    for (let user in this.props.users) {
      if (file.partTwo.includes(this.props.users[user]._id)) {
        const res = await Axios(`http://${this.props.users[user].ip}:4242/download/${file.uid}.part2`);
        fileArray = fileArray.concat(res.data.data);
      }
    }

    const arrayBuff = new Int8Array(fileArray);
    const blob = new Blob([arrayBuff], { type: file.type });
    var blobURL = window.URL.createObjectURL(blob);
    var tempLink = document.createElement('a');
    tempLink.style.display = 'none';
    tempLink.href = blobURL;
    tempLink.setAttribute('download', file.name);
    if (typeof tempLink.download === 'undefined') {
       tempLink.setAttribute('target', '_blank');
    }

    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    window.URL.revokeObjectURL(blobURL);
  }

  render() {
    return (
      <div className='FilesContainer'>
        <div className='FilesHeader'>
          <h3>Tous les fichiers</h3>
        </div>
        <Table style={style.Table}>
          <TableBody>
            {this.props.files.map((file) => (
              <FileItem
                key={file._id}
                file={file}
                onDownload={this.downloadFile}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default Files;
