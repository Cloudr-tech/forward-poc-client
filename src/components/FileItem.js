import React from 'react';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import 'font-awesome/css/font-awesome.min.css';
import { fileConvertSize, getIconType } from '../helpers/helpers.js';

const style = {
    rightColumn: {
      textAlign: 'right',
      color: 'black',
      fontSize: '18px',
      paddingRight: '0',
    },
    firstColumn: {
      width: '60px',
      marginLeft: 0,
      paddingLeft: 0,
      paddingRight: 0,
      fontSize: '18px',
    },
    secondColumn: {
      fontSize: '18px',
      paddingLeft: 0,
    }
};

const FileItem = props => (
  <TableRow>
    <TableRowColumn style={style.firstColumn}><i className={`fa ${getIconType(props.file.type)}`} /></TableRowColumn>
    <TableRowColumn style={style.secondColumn}>{props.file.name}</TableRowColumn>
    <TableRowColumn style={style.rightColumn}>{fileConvertSize(props.file.size)} <i className='fa fa-download' onClick={() => { props.onDownload(props.file) }} /></TableRowColumn>
  </TableRow>
);

export default FileItem;
