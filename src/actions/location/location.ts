import Geolocation from '@react-native-community/geolocation';
import {Location} from '../../infrastructure/intefaces/location';

export const GetCurrentLocation = async (): Promise<Location> => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      info => {
        resolve({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        });
      },
      error => {
        console.log(`no se pudo obtener la localizacion: ${error}`);
        reject(error);
      },
      {
        enableHighAccuracy: true,
      },
    );
  });
};

export const watchCurrentLocation = (
  locationCallback: (location: Location) => void,
): number => {
  return Geolocation.watchPosition(
    info =>
      locationCallback({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
      }),
    error => {
      throw new Error(`can't get watchPosition`);
    },
    {
      enableHighAccuracy: true,
    },
  );
};

export const clearWatchLocation = (watchId: number) => {
  Geolocation.clearWatch(watchId);
};
