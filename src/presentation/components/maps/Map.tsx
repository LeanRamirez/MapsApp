import {Platform} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Location} from '../../../infrastructure/intefaces/location';
import {FAB} from '../ui/FAB';

interface Props {
  showsUserLocation?: boolean;
  initialLocation: Location;
}

export const Map = ({showsUserLocation = true, initialLocation}: Props) => {
  return (
    <>
      <MapView
        showsUserLocation={showsUserLocation}
        provider={Platform.OS === 'ios' ? undefined : PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{flex: 1}}
        region={{
          latitude: initialLocation.latitud,
          longitude: initialLocation.longitud,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="Este es el titulo del marcador"
          description="Este es el cuerpo del marcador"
        />
      </MapView>

      <FAB
        iconName="compass-outline"
        onPress={() => console.log('hola')}
        style={{
          bottom: 20,
          right: 20,
        }}
      />
    </>
  );
};
