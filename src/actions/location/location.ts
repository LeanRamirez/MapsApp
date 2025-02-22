import Geolocation from '@react-native-community/geolocation';
import {Location} from '../../infrastructure/intefaces/location';

export const GetCurrentLocation = async (): Promise<Location> => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      info => {
        resolve({
          latitud: info.coords.latitude,
          longitud: info.coords.longitude,
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
