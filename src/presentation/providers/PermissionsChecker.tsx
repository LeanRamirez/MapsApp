import {AppState} from 'react-native';
import React, {PropsWithChildren, useEffect} from 'react';
import {usePermissionStore} from '../store/permissions/usePermissionStore';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParams} from '../navigation/StackNavigator';

export default function PermissionsChecker({children}: PropsWithChildren) {
  const {locationStatus, checkLocationPermission} = usePermissionStore();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    if (locationStatus === 'granted') {
      navigation.navigate('MapScreen');
    } else if (locationStatus !== 'undetermined') {
      navigation.navigate('PermissionsScreen');
    }
  }, [locationStatus]);

  useEffect(() => {
    checkLocationPermission();
  }, []);

  useEffect(() => {
    const subcription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'active') {
        checkLocationPermission();
      }
    });

    return () => {
      subcription.remove();
    };
  }, []);

  return <>{children}</>;
}
