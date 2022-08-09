import {Button, H1} from '@ATIX/components/atoms';
import {AppDispatch} from '@ATIX/store';
import {closeBottomSheet} from '@ATIX/store/slices/bottomSheet';
import {saveImage} from '@ATIX/store/slices/images/imagesSlice';
import {stylesShared} from '@ATIX/styles';
import React from 'react';
import {AppState, View} from 'react-native';
import {
  CameraOptions,
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';

const optionsCamera: CameraOptions = {
  saveToPhotos: true,
  mediaType: 'photo',
  includeBase64: false,
};

const optionsImageLibrary: ImageLibraryOptions = {
  selectionLimit: 0,
  mediaType: 'photo',
  includeBase64: false,
};

export const ImageActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selectImage = async () => {
    const result = await launchImageLibrary(optionsImageLibrary);
    if (result.assets) {
      dispatch(saveImage(result.assets));
      dispatch(closeBottomSheet());
    }
  };
  const takePicture = async () => {
    const result = await launchCamera(optionsCamera);
  };
  return (
    <View>
      <H1 customStyles={stylesShared.textAlignCenter}>Select Image</H1>

      <View
        style={[
          stylesShared.row,
          stylesShared.spaceBetween,
          stylesShared.marginVertical,
        ]}>
        <Button label="Load photos" onPress={selectImage} />
        <Button label="Take picture" onPress={takePicture} />
      </View>
    </View>
  );
};
