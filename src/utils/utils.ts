const MAX_SIZE_FILE = 200;

import {DocumentPickerResponse} from 'react-native-document-picker';

export const checksizeFiles = (files: DocumentPickerResponse[]) => {
  let allow = true;
  files.map(file => {
    if (file.size && file.size > MAX_SIZE_FILE) {
      allow = false;
    }
  });
  return allow;
};
