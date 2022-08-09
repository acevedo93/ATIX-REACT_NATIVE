import {imagesSelector} from '@ATIX/store/slices/images';
import React from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {ImageItem} from '../ImageItem';

export const ImageList = () => {
  const images = useSelector(imagesSelector);
  return (
    <FlatList
      numColumns={3}
      data={images}
      renderItem={({item}) => <ImageItem image={item} />}
      keyExtractor={item => item.id}
    />
  );
};
