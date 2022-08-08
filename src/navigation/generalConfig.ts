import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNavigationContainerRef} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
export type RootStackParamList = {};

export type RootTabsParamList = {
  Csv: undefined;
  Photos: undefined;
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
