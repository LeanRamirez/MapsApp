import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../../../config/theme/GlobalStyles';
import {usePermissionStore} from '../../store/permissions/usePermissionStore';

export default function PermissionsScreen() {
  const {locationStatus, requestLocationPermission} = usePermissionStore();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black'}}>Habilitar ubicación</Text>

      <Pressable
        style={GlobalStyles.btnPrimary}
        onPress={requestLocationPermission}>
        <Text style={{color: 'white'}}>Habilitar localización</Text>
      </Pressable>

      <Text style={{color: 'black'}}>Estado actual: {locationStatus}</Text>
    </View>
  );
}
