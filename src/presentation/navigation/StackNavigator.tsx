import {createStackNavigator} from '@react-navigation/stack';
import {MapScreen} from '../screens/maps/MapScreen';
import {PermissionsScreen} from '../screens/permissions/PermissionsScreen';
import {LoadingScreen} from '../screens/loading/LoadingScreen';

export type RootStackParams = {
  LoadingScreen: undefined;
  PermissionsScreen: undefined;
  MapScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoadingScreen"
      // initialRouteName="PermissionsScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
    </Stack.Navigator>
  );
};
