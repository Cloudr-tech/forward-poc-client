import React, { Component } from 'react';
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

  downloadFile = file => {
    // const fileArray = [];

    console.log(file);
    for (let user in this.props.users) {
      if (file.partOne.includes(this.props.users[user]._id)) {
        console.log(`download part1 from ${this.props.users[user].hostname}`);
        // const rawRes = await fetch(`http://${this.props.users[user].ip}/files/${file.slug}.part1`)
        // const jsonRes = await rawRes.json();
        // if (jsonRes.body.length > 0) {
        //   fileArray.push(jsonRes.body);
        //}
        // break;
      }
    }

    for (let user in this.props.users) {
      if (file.partOne.includes(this.props.users[user]._id)) {
        console.log(`download part2 from ${this.props.users[user].hostname}`);
        // const rawRes = await fetch(`http://${this.props.users[user].ip}/files/${file.slug}.part2`)
        // const jsonRes = await rawRes.json();
        // if (jsonRes.body.length > 0) {
        //   fileArray.push(jsonRes.body);
        //}
        // breal;
      }
    }

    // create file and download
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
