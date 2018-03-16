const fileConvertSize = aSize => {
	aSize = Math.abs(parseInt(aSize, 10));
	if (aSize === 0)
		return ('0 ko');
	var def = [[1, 'octets'], [1024, 'ko'], [1024 * 1024, 'Mo'], [1024 * 1024 * 1024, 'Go'], [1024 * 1024 * 1024 * 1024, 'To']];
	for(var i = 0; i < def.length; i++) {
		if (aSize < def[i][0])
      return (aSize / def[i-1][0]).toFixed(2) + ' ' + def[i-1][1];
	}
}

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
    if (fileType.includes(iconArray[array][0])) {
      return iconArray[array][1];
    }
  }

  return 'fa-file-o';
}

export { fileConvertSize, getIconType };
