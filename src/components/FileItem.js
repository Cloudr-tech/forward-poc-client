import React from 'react';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const FileItem = props => (
  <TableRow>
    <TableRowColumn>{props.id}</TableRowColumn>
    <TableRowColumn>{props.name}</TableRowColumn>
    <TableRowColumn>{props.size}</TableRowColumn>
  </TableRow>
);

export default FileItem;
