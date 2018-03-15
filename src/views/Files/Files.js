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
  constructor() {
    super();
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
                key={0}
                id={0}
                name={file}
                size={4096}
                />
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default Files;
