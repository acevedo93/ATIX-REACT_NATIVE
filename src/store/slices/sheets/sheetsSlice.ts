import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DocumentPickerResponse} from 'react-native-document-picker';

export interface Sheet extends DocumentPickerResponse {
  id: string;
}
export interface SheetsState {
  data: Sheet[];
}

const initialState: SheetsState = {
  data: [],
};

export const sheetsSlice = createSlice({
  name: 'sheets',
  initialState: initialState,
  reducers: {
    saveSheet: (state, {payload}: PayloadAction<Sheet[]>) => {
      state.data.push(...payload);
    },
    deleteSheet: (state, {payload}: PayloadAction<Sheet>) => {
      state.data = state.data.filter(sheet => sheet.id !== sheet.id);
    },
    deleteSheets: state => {
      state.data = [];
    },
  },
});

export const {saveSheet, deleteSheet, deleteSheets} = sheetsSlice.actions;

export const sheetsSelector = (state: {sheets: SheetsState}) =>
  state.sheets.data;
