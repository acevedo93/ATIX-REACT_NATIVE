import {StyleSheet} from 'react-native';
import {Colors} from './colors';

export enum StyleConstants {
  containerPadding = 14,
  fullWidth = '100%',

  //DIVIDERS
  defaultDivider = 10,

  //BTNS
  btnBorderRadius = 15,
  btnPadding = 16,
  btnHeight = 50,
  btnWidth = 120,
  btnLarge = 24,
  btnOpacity = 0.5,
  btnRadiusShadow = 15,

  //Icons
  largeIcon = 40,
  bigIcon = 24,
  mediumIcon = 18,
  smallIcon = 16,
  tinyIcon = 14,
  xsmallIcon = 12,
}

export const stylesShared = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  borderTest: {
    borderWidth: 1,
    borderColor: 'red',
  },
  container: {
    padding: StyleConstants.containerPadding,
    flex: 1,
    position: 'relative',
    backgroundColor: Colors.backgroundLight,
  },
  positionBottom: {
    position: 'absolute',
    bottom: 0,
  },
  positionBottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  positionBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  positionTop: {
    position: 'absolute',
    top: 0,
  },
  positionTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  positionTopRight: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  positionRelative: {
    position: 'relative',
  },
  alignLeft: {
    alignItems: 'flex-start',
  },
  alignRight: {
    alignItems: 'flex-end',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  textAlignLeft: {
    textAlign: 'left',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  textAlignJustify: {
    textAlign: 'justify',
  },
  row: {
    flexDirection: 'row',
  },
  AlignMainAxisCenter: {
    justifyContent: 'center',
  },
  AlignOffAxisTop: {
    alignItems: 'flex-start',
  },
  AlignOffAxisCenter: {
    alignItems: 'center',
  },
  wrapContent: {
    flexWrap: 'wrap',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex05: {
    flex: 0.5,
  },
  paddingVertical: {
    paddingVertical: 10,
  },
  paddingHorizontal: {
    paddingHorizontal: 10,
  },
  marginVertical: {
    marginVertical: 30,
  },
  marginHorizontal: {
    marginHorizontal: 30,
  },
});
