import React, { Component } from 'react';
import FileItem from '../../components/FileItem';
import {
  Table,
  TableBody,
} from 'material-ui/Table';
import './Files.css';

class Files extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='FilesContainer'>
        <div className='FilesHeader'></div>
        <h1 className='FilesTitle'>Files</h1>
        <Table>
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
