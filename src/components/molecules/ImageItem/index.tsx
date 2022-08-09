import {Image as ImageInterface} from '@ATIX/store/slices/images/imagesSlice';
import {Image, StyleSheet, View} from 'react-native';
import {imageAdapter} from '@ATIX/utils/adapters';
import {stylesShared} from '@ATIX/styles';
import React from 'react';
interface Props {
  image: ImageInterface;
}

export const ImageItem = ({image}: Props) => {
  return (
    <View
      style={[stylesShared.paddingHorizontal, stylesShared.paddingVertical]}>
      <Image
        source={{uri: imageAdapter(image.base64 || '')}}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    borderRadius: 10,
  },
});
