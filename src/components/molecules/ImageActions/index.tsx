import {Button, H1} from '@ATIX/components/atoms';
import {Image} from '@ATIX/models/Image';
import {AppDispatch} from '@ATIX/store';
import {closeBottomSheet} from '@ATIX/store/slices/bottomSheet';
import {saveImage} from '@ATIX/store/slices/images/imagesSlice';
import {stylesShared} from '@ATIX/styles';
import {imageWithIdAdapter} from '@ATIX/utils/adapters';
import React from 'react';
import {View} from 'react-native';
import {
  CameraOptions,
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {langs} from './langs';

const optionsImageLibrary: ImageLibraryOptions = {
  selectionLimit: 0,
  mediaType: 'photo',
  includeBase64: true,
};

export const ImageActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selectImage = async () => {
    const result = await launchImageLibrary(optionsImageLibrary);
    if (result.assets) {
      dispatch(saveImage(imageWithIdAdapter(result.assets)));
      dispatch(closeBottomSheet());
    }
  };

  return (
    <View>
      <View
        style={[
          stylesShared.row,
          stylesShared.marginVertical,
          stylesShared.AlignMainAxisCenter,
        ]}>
        <Button label={langs.loadPhotos} onPress={selectImage} />
      </View>
    </View>
  );
};
