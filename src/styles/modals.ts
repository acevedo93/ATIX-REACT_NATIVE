import {StyleSheet} from 'react-native';
import {StyleConstants} from './shared';

export const Modalstyles = StyleSheet.create({
  container: {},
  modalView: {
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: StyleConstants.modalborderRadius,
    padding: StyleConstants.modalPadding,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: StyleConstants.modalShadowOffsetWidth,
      height: StyleConstants.modalShadowOffsetHeight,
    },

    shadowOpacity: StyleConstants.modalShadowOpacity,
    shadowRadius: StyleConstants.modalShadowRadius,
    elevation: StyleConstants.modalElevation,
  },
  closeIcon: {
    position: StyleConstants.modalCloseIconPosition,
    zIndex: StyleConstants.modalCloseIconZindex,
    top: StyleConstants.modalCloseIconTop,
    right: StyleConstants.modalCloseIconRight,
  },
});
