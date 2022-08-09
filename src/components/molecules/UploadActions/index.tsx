import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import {AppDispatch} from '@ATIX/store';
import {Button, CustomModal, H1} from '@ATIX/components/atoms';
import {checksizeFiles} from '@ATIX/utils/utils';
import {closeBottomSheet} from '@ATIX/store/slices/bottomSheet';
import {imageWithIdAdapter, sheetWithIdAdapter} from '@ATIX/utils/adapters';
import {langs} from './langs';
import {saveImage} from '@ATIX/store/slices/images/imagesSlice';
import {saveSheet} from '@ATIX/store/slices/sheets';
import {stylesShared} from '@ATIX/styles';
import {useDispatch} from 'react-redux';
import {View} from 'react-native';
import DocumentPicker, {types} from 'react-native-document-picker';
import React from 'react';

const optionsImageLibrary: ImageLibraryOptions = {
  selectionLimit: 0,
  mediaType: 'photo',
  includeBase64: true,
};

export const UploadActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [modalOpen, setModalOpen] = React.useState(false);

  const selectImage = async () => {
    const result = await launchImageLibrary(optionsImageLibrary);
    if (result.assets) {
      dispatch(saveImage(imageWithIdAdapter(result.assets)));
      dispatch(closeBottomSheet());
    }
  };

  const selectFiles = async () => {
    try {
      const pickerResult = await DocumentPicker.pick({
        presentationStyle: 'overFullScreen',
        copyTo: 'cachesDirectory',
        type: types.csv,
      });
      const allow = checksizeFiles(pickerResult);
      if (!allow) {
        setModalOpen(true);
      }
      dispatch(saveSheet(sheetWithIdAdapter(pickerResult)));
    } catch (err) {
      // User cancelled the picker, exit any further steps
      console.log(err);
    }
  };

  return (
    <View>
      <View
        style={[
          stylesShared.row,
          stylesShared.marginVertical,
          stylesShared.AlignMainAxisCenter,
          stylesShared.spaceBetween,
        ]}>
        <Button label={langs.loadPhotos} onPress={selectImage} />
        <Button label={langs.loadCSV} onPress={selectFiles} />
      </View>
      <CustomModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        message={langs.loadErrorMsg}
      />
    </View>
  );
};
