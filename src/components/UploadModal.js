import React from 'react';
import Dialog from 'material-ui/Dialog';

const style = {
  width: '95%',
  height: '5px',
  background: 'white',
  margin: 'auto',
  borderRadius: '8px',
};

const UploadModal = props => (
  <Dialog
    open={props.open}
  >
    {props.string}
    <div style={style}>
      <div style={{ width: props.current, background: '#5cb85c', height: '100%', maxWidth: '100%', borderRadius: 5}}/>
    </div>
  </Dialog>
);

export default UploadModal;
