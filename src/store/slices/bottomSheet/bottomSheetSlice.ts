import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface BottomSheetState {
  isOpen?: boolean;
}

export const bottomSheetSlice = createSlice({
  name: 'bottomSheet',
  initialState: {
    isOpen: false,
  },
  reducers: {
    openBottomSheet: state => {
      state.isOpen = true;
    },
    closeBottomSheet: state => {
      state.isOpen = false;
    },
  },
});

export const {openBottomSheet, closeBottomSheet} = bottomSheetSlice.actions;

export const isOpenBottomSheetSelector = (state: any) =>
  state.bottomSheet.isOpen;
export const typeBottomSheetSelector = (state: any) => state.bottomSheet.type;
