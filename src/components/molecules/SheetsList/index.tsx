import {FlatList} from 'react-native-gesture-handler';
import {langs} from './langs';
import {SheetItem} from '../SheetItem';
import {sheetsSelector} from '@ATIX/store/slices/sheets';
import {ToolTip} from '@ATIX/components/atoms';
import {useSelector} from 'react-redux';
import React from 'react';

export const SheetsList = () => {
  const sheets = useSelector(sheetsSelector);
  return (
    <>
      {sheets.length > 0 ? (
        <FlatList
          data={sheets}
          numColumns={3}
          keyExtractor={item => item.id}
          renderItem={({item}) => <SheetItem sheet={item} />}
        />
      ) : (
        <ToolTip message={langs.emptymsg} />
      )}
    </>
  );
};
