import {View, StyleSheet} from 'react-native';
import {Map} from '../../components/maps/Map';
import {GetCurrentLocation} from '../../../actions/location/location';
import {UseLocationStore} from '../../store/location/UseLocationStore';
import {LoadingScreen} from '../loading/LoadingScreen';
import {useEffect} from 'react';

export const MapScreen = () => {
  const {lastKnowLocation, getLocation} = UseLocationStore();

  useEffect(() => {
    if (lastKnowLocation === null) {
      getLocation();
    }
  }, []);

  if (lastKnowLocation === null) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.container}>
      <Map initialLocation={lastKnowLocation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});
