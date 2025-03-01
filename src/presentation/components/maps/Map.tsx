import {Platform} from 'react-native';
import MapView, {Marker, Polyline, PROVIDER_GOOGLE} from 'react-native-maps';
import {Location} from '../../../infrastructure/intefaces/location';
import {FAB} from '../ui/FAB';
import {useRef, useEffect, useState} from 'react';
import {UseLocationStore} from '../../store/location/UseLocationStore';

interface Props {
  showsUserLocation?: boolean;
  initialLocation: Location;
}

export const Map = ({showsUserLocation = true, initialLocation}: Props) => {
  const mapRef = useRef<MapView | null>(null);
  const {
    getLocation,
    lastKnowLocation,
    watchLocation,
    clearWatchLocation,
    userLocationsList,
  } = UseLocationStore();
  const [isFollowingUser, setIsFollowingUser] = useState(true);
  const [isShowingPolyline, setIsShowingPolyline] = useState(true);

  const moveCameraToLocation = (location: Location) => {
    if (!mapRef.current) return;
    mapRef.current.animateCamera({
      center: location,
    });
  };

  const moveToCurrentLocation = async () => {
    if (!lastKnowLocation) {
      moveCameraToLocation(initialLocation);
    }
    const location = await getLocation();
    if (!location) return;
    moveCameraToLocation(location);
  };

  useEffect(() => {
    watchLocation();
    return () => {
      clearWatchLocation();
    };
  }, []);

  useEffect(() => {
    if (lastKnowLocation && isFollowingUser) {
      moveCameraToLocation(lastKnowLocation);
    }
  }, [lastKnowLocation, isFollowingUser]);

  return (
    <>
      <MapView
        ref={map => {
          if (map) {
            mapRef.current = map;
          }
        }}
        showsUserLocation={showsUserLocation}
        provider={Platform.OS === 'ios' ? undefined : PROVIDER_GOOGLE}
        style={{flex: 1}}
        onTouchStart={() => setIsFollowingUser(false)}
        initialRegion={{
          latitude: initialLocation.latitude,
          longitude: initialLocation.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{
            latitude: initialLocation.latitude,
            longitude: initialLocation.longitude,
          }}
          title="Ubicación predeterminada"
          description="Este es el marcador inicial"
        />

        {isShowingPolyline && (
          <Polyline
            coordinates={userLocationsList}
            strokeColor="black"
            strokeWidth={5}
          />
        )}
      </MapView>

      <FAB
        iconName={isShowingPolyline ? 'eye-outline' : 'eye-off-outline'}
        onPress={() => setIsShowingPolyline(!isShowingPolyline)}
        style={{
          bottom: 140,
          right: 20,
        }}
      />
      <FAB
        iconName={isFollowingUser ? 'walk-outline' : 'accessibility-outline'}
        onPress={() => setIsFollowingUser(!isFollowingUser)}
        style={{
          bottom: 80,
          right: 20,
        }}
      />
      <FAB
        iconName="compass-outline"
        onPress={moveToCurrentLocation}
        style={{
          bottom: 20,
          right: 20,
        }}
      />
    </>
  );
};
