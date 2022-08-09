import {Button} from '../Button';
import {H2} from '../Text';
import {langs} from './langs';
import {Modal, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';

interface Props {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

export const CustomModal = ({message, isOpen, onClose}: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable onPress={onClose}>
            <H2>{message}</H2>
          </Pressable>
          <Button onPress={onClose} label={langs.closeLabel} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
