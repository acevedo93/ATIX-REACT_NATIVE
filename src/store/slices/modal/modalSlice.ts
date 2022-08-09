import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CustomModals} from '.';

export interface ModalState {
  isOpen?: boolean;
  isLoading?: boolean;
  message?: string | null;
  title?: string | null;
  isError?: boolean;
  customModal?: CustomModals | null;
}

const initialState: ModalState = {
  isOpen: false,
  isLoading: false,
  message: null,
  title: null,
  isError: false,
  customModal: null,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    openModal: (state, {payload}: PayloadAction<ModalState>) => {
      state.isOpen = true;
      state.isLoading = false;
      state.message = payload.message;
      state.title = payload.title;
      state.isError = payload.isError;
      state.customModal = payload.customModal;
    },
    closeModal: state => {
      state.isOpen = false;
      state.isLoading = false;
      state.message = null;
      state.title = null;
      state.isError = false;
      state.customModal = null;
    },
  },
});

export const {openModal, closeModal} = modalSlice.actions;

export const isOpenModalSelector = (state: {modal: ModalState}) =>
  state.modal.isOpen;

export const isCustomModalSelector = (state: {modal: ModalState}) =>
  state.modal.customModal;
