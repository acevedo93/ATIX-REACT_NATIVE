import {Dispatch} from 'redux';
import {CustomModals} from '.';
import {closeModal, ModalState, openModal} from './modalSlice';

export const openModalThunk = (data: ModalState) => (dispatch: Dispatch) => {
  dispatch(openModal(data));
};

export const closeModalThunk = () => (dispatch: Dispatch) => {
  dispatch(closeModal());
};
