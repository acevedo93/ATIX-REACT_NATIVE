import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Colors} from '@ATIX/styles';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createNavigationContainerRef} from '@react-navigation/native';
export type RootTabsParamList = {
  Sheets: undefined;
  Images: undefined;
  TakePhoto: undefined;
};
export const Stack = createNativeStackNavigator<RootStackParamList>();
export const Tab = createBottomTabNavigator<RootTabsParamList>();
export const navigationRef = createNavigationContainerRef();

export function navigate(name: any, params: any = {}) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export const withOutTitle = {
  title: '',
};

interface OptionsProps {
  navigator: BottomTabNavigationOptions;
  mainCustomButton: BottomTabNavigationOptions;
}

export const tabOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

export const stylesBottomTabsOptions: OptionsProps = {
  navigator: {
    tabBarLabelStyle: {
      fontSize: 10,
      color: Colors.textLight,
    },
    tabBarStyle: {
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      position: 'absolute',
      backgroundColor: Colors.backgroundDark,
    },
  },
  mainCustomButton: {
    tabBarLabelStyle: {
      fontSize: 10,
      color: Colors.textLight,
      position: 'absolute',
      bottom: -30,
      left: 0,
      right: 0,
    },
  },
};
