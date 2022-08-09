import {H3} from '@ATIX/components/atoms';
import {
  BottomSheetRefProps,
  BottomSheetWrapper,
  GeneralWrapper,
} from '@ATIX/components/wrappers';
import {isOpenBottomSheetSelector} from '@ATIX/store/slices/bottomSheet/bottomSheetSlice';
import {Colors} from '@ATIX/styles';
import React, {FunctionComponent, useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';

export const GlobalBottomSheet: FunctionComponent<any> = ({
  onClose,
  onOpen,
  title,
  ...props
}) => {
  const ref = useRef<BottomSheetRefProps>(null);
  const isOpen = useSelector(isOpenBottomSheetSelector);

  useEffect(() => {
    if (isOpen) {
      ref?.current?.scrollTo(-600);
    } else {
      ref?.current?.scrollTo(0);
    }
  }, [isOpen]);

  return (
    <BottomSheetWrapper ref={ref} {...props}>
      <GeneralWrapper backgroundColor={Colors.backgroundPopUp}>
        <H3>hola</H3>
      </GeneralWrapper>
    </BottomSheetWrapper>
  );
};
