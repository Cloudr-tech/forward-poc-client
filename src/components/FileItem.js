import React from 'react';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import 'font-awesome/css/font-awesome.min.css';

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

const getIconType = fileType => {
  const iconArray = [
    ['image', 'fa-file-image-o'],
    ['audio', 'fa-file-audio-o'],
    ['video', 'fa-file-video-o'],
    ['application/pdf', 'fa-file-pdf-o'],
    ['application/msword', 'fa-file-word-o'],
    ['application/vnd.ms-word', 'fa-file-word-o'],
    ['application/vnd.oasis.opendocument.text', 'fa-file-word-o'],
    ['application/vnd.openxmlformats-officedocument.wordprocessingml', 'fa-file-word-o'],
    ['application/vnd.ms-excel', 'fa-file-excel-o'],
    ['application/vnd.openxmlformats-officedocument.spreadsheetml', 'fa-file-excel-o'],
    ['application/vnd.oasis.opendocument.spreadsheet', 'fa-file-excel-o'],
    ['application/vnd.ms-powerpoint', 'fa-file-powerpoint-o'],
    ['application/vnd.openxmlformats-officedocument.presentationml', 'fa-file-powerpoint-o'],
    ['application/vnd.oasis.opendocument.presentation', 'fa-file-powerpoint-o'],
    ['text/plain', 'fa-file-text-o'],
    ['text/html', 'fa-file-code-o'],
    ['application/json', 'fa-file-code-o'],
    ['application/gzip', 'fa-file-archive-o'],
    ['application/zip', 'fa-file-archive-o'],
  ];

  for (const array in iconArray) {
    if (fileType === iconArray[array][0]) {
      return iconArray[array][1];
    }
  }

  return 'fa-file-o';
}

const FileItem = props => (
  <TableRow>
    <TableRowColumn style={style.firstColumn}><i className={`fa ${getIconType(props.type)}`} /></TableRowColumn>
    <TableRowColumn style={style.secondColumn}>{props.name}</TableRowColumn>
    <TableRowColumn style={style.rightColumn}>{props.size} <i className='fa fa-download' /></TableRowColumn>
  </TableRow>
);

export default FileItem;
