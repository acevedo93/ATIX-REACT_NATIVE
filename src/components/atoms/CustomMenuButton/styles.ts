import {Colors} from '@ATIX/styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    top: -42,
    width: 70,
    height: 70,
    borderWidth: 10,
    borderColor: Colors.backgroundPopUp,
    borderRadius: 35,
  },
  inner: {
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backgroundDark,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
