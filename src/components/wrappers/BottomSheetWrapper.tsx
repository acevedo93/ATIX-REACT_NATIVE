import {closeBottomSheet} from '@ATIX/store/slices/bottomSheet';
import {Colors} from '@ATIX/styles';
import React, {useCallback, useImperativeHandle} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {useDispatch} from 'react-redux';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

type BottomSheetProps = {
  children?: React.ReactNode;
};

export type BottomSheetRefProps = {
  scrollTo: (destination: number) => void;
  isActive: () => boolean;
};

export const BottomSheetWrapper = React.forwardRef<
  BottomSheetRefProps,
  BottomSheetProps
>(({children}, ref) => {
  const dispatch = useDispatch();
  const translateY = useSharedValue(0);
  const active = useSharedValue(false);
  const handleAnimationEnd = (finished?: boolean) => {};
  const scrollTo = useCallback((destination: number) => {
    'worklet';
    active.value = destination !== 0;
    if (destination === 0) {
    }
    translateY.value = withSpring(destination, {damping: 500});
  }, []);

  const isActive = useCallback(() => {
    return active.value;
  }, []);

  useImperativeHandle(ref, () => ({scrollTo, isActive}), [scrollTo, isActive]);

  const context = useSharedValue({y: 0});
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {y: translateY.value};
    })
    .onUpdate(event => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      runOnJS(dispatch)(closeBottomSheet());
      if (translateY.value > -SCREEN_HEIGHT / 3) {
        scrollTo(0);
      } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
        scrollTo(MAX_TRANSLATE_Y);
      }
    });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [25, 5],
      Extrapolate.CLAMP,
    );

    return {
      borderRadius,
      transform: [{translateY: translateY.value}],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.container, rBottomSheetStyle]}>
        <View style={styles.lineContainer}>
          <View style={styles.line} />
        </View>
        {children}
      </Animated.View>
    </GestureDetector>
  );
});

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    width: '100%',
    position: 'absolute',
    borderRadius: 25,
    backgroundColor: Colors.backgroundDark,
    top: SCREEN_HEIGHT,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  lineContainer: {
    alignItems: 'center',
    width: '100%',
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'grey',
    marginVertical: 10,
    borderRadius: 2,
  },
});
