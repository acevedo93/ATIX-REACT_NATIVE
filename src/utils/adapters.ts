import {Image} from '@ATIX/store/slices/images/imagesSlice';
import {Sheet} from '@ATIX/store/slices/sheets';
import {DocumentPickerResponse} from 'react-native-document-picker';
import {Asset} from 'react-native-image-picker';

export const imageAdapter = (base64: string): string => {
  return `data:image/png;base64,${base64}`;
};
export const imageWithIdAdapter = (assets: Asset[]): Image[] => {
  return assets.map(image => {
    return {
      ...image,
      id: Math.random().toString(),
    };
  });
};

export const sheetWithIdAdapter = (
  sheets: DocumentPickerResponse[],
): Sheet[] => {
  return sheets.map(sheet => {
    return {
      ...sheet,

      id: Math.random().toString(),
    };
  });
};
