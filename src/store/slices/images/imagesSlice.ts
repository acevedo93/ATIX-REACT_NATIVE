import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Asset} from 'react-native-image-picker';

export interface Image extends Asset {
  id: string;
}
export interface ImagesState {
  data: Image[];
}

const initialState: ImagesState = {
  data: [],
};

export const imageSlice = createSlice({
  name: 'images',
  initialState: initialState,
  reducers: {
    saveImage: (state, {payload}: PayloadAction<Image[]>) => {
      state.data.push(...payload);
    },
    deleteImage: (state, {payload}: PayloadAction<Image>) => {
      state.data = state.data.filter(image => image.id !== payload.id);
    },
    deleteImages: state => {
      state.data = [];
    },
  },
});

export const {saveImage, deleteImage, deleteImages} = imageSlice.actions;

export const imagesSelector = (state: {images: ImagesState}) =>
  state.images.data;
