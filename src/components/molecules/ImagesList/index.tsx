import {H1} from '@ATIX/components/atoms';
import {imagesSelector} from '@ATIX/store/slices/images';
import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {ImageItem} from '../ImageItem';

export const ImageList = () => {
  const images = useSelector(imagesSelector);
  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => <ImageItem image={item} />}
      />
    </View>
  );
};
