export const UPLOAD_ACTION = 'UPLOAD_ACTION';

// Update to send file info to the API
export const uploadAction = file => ({
  type: UPLOAD_ACTION,
  file,
});
