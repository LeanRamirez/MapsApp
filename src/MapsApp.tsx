import 'react-native-gesture-handler';

import {Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './presentation/navigation/StackNavigator';
import PermissionsChecker from './presentation/providers/PermissionsChecker';
// import {enableLatestRenderer} from 'react-native-maps';
// enableLatestRenderer();

export default function MapsApp() {
  return (
    <NavigationContainer>
      <PermissionsChecker>
        <StackNavigator />
      </PermissionsChecker>
    </NavigationContainer>
  );
}
