import {Image} from '@ATIX/models/Image';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Asset} from 'react-native-image-picker';

export interface ImagesState {
  data: Asset[];
}

const initialState: ImagesState = {
  data: [],
};

export const imageSlice = createSlice({
  name: 'images',
  initialState: initialState,
  reducers: {
    saveImage: (state, {payload}: PayloadAction<Asset[]>) => {
      state.data.push(...payload);
    },
    deleteImage: (state, {payload}: PayloadAction<Asset>) => {
      state.data = state.data.filter(
        image => image.fileName !== payload.fileName,
      );
    },
    deleteImages: state => {
      state.data = [];
    },
  },
});

export const {saveImage, deleteImage, deleteImages} = imageSlice.actions;

export const imagesSelector = (state: {images: ImagesState}) =>
  state.images.data;
