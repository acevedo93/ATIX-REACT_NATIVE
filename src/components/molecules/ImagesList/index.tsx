import {FlatList} from 'react-native';
import {ImageItem} from '../ImageItem';
import {imagesSelector} from '@ATIX/store/slices/images';
import {ToolTip} from '@ATIX/components/atoms';
import {useSelector} from 'react-redux';
import React from 'react';
import {langs} from './langs';

export const ImageList = () => {
  const images = useSelector(imagesSelector);
  return (
    <>
      {images.length > 0 ? (
        <FlatList
          numColumns={3}
          data={images}
          renderItem={({item}) => <ImageItem image={item} />}
          keyExtractor={item => item.id}
        />
      ) : (
        <ToolTip message={langs.emptymsg} />
      )}
    </>
  );
};
