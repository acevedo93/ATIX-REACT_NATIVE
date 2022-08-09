import {
  BottomSheetRefProps,
  BottomSheetWrapper,
  GeneralWrapper,
} from '@ATIX/components/wrappers';
import {Colors} from '@ATIX/styles';
import {H1} from '@ATIX/components/atoms';
import {isOpenBottomSheetSelector} from '@ATIX/store/slices/bottomSheet/bottomSheetSlice';
import {langs} from './langs';
import {UploadActions} from '@ATIX/components/molecules';
import {useSelector} from 'react-redux';
import React, {FunctionComponent, useEffect, useRef} from 'react';

export const UploadActionsBottomSheet: FunctionComponent<any> = ({
  onClose,
  onOpen,
  title,
  ...props
}) => {
  const ref = useRef<BottomSheetRefProps>(null);
  const isOpen = useSelector(isOpenBottomSheetSelector);

  useEffect(() => {
    if (isOpen) {
      ref?.current?.scrollTo(-200);
    } else {
      ref?.current?.scrollTo(0);
    }
  }, [isOpen]);

  return (
    <BottomSheetWrapper ref={ref} {...props}>
      <GeneralWrapper>
        <H1 customStyles={{color: Colors.textLight}}>{langs.uploadFiles}</H1>
        <UploadActions />
      </GeneralWrapper>
    </BottomSheetWrapper>
  );
};
