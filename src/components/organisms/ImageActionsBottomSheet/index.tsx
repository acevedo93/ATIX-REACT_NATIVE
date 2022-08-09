import {ImageActions} from '@ATIX/components/molecules';
import {
  BottomSheetRefProps,
  BottomSheetWrapper,
  GeneralWrapper,
} from '@ATIX/components/wrappers';
import {isOpenBottomSheetSelector} from '@ATIX/store/slices/bottomSheet/bottomSheetSlice';
import React, {FunctionComponent, useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';

export const ImageActionsBottomSheet: FunctionComponent<any> = ({
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
        <ImageActions />
      </GeneralWrapper>
    </BottomSheetWrapper>
  );
};
