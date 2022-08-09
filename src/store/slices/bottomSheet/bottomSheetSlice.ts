import {createSlice} from '@reduxjs/toolkit';

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

export const isOpenBottomSheetSelector = (state: {
  bottomSheet: BottomSheetState;
}) => state.bottomSheet.isOpen;
export const typeBottomSheetSelector = (state: {
  bottomSheet: BottomSheetState;
}) => state.bottomSheet.type;
