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
    this.props.getFiles();
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
                type={file.type}
                name={file.name}
                size={file.size}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default Files;
