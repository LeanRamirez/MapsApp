import {create} from 'zustand';
import {Location} from '../../../infrastructure/intefaces/location';
import {
  clearWatchLocation,
  GetCurrentLocation,
  watchCurrentLocation,
} from '../../../actions/location/location';

interface LocationState {
  lastKnowLocation: Location | null;
  userLocationsList: Location[];
  watchId: number | null;

  getLocation: () => Promise<Location | null>;
  watchLocation: () => void;
  clearWatchLocation: () => void;
}

export const UseLocationStore = create<LocationState>()((set, get) => ({
  lastKnowLocation: null,
  userLocationsList: [],
  watchId: null,

  getLocation: async () => {
    const location = await GetCurrentLocation();
    set({lastKnowLocation: location});
    return location;
  },

  watchLocation: () => {
    const watchId = get().watchId;
    if (watchId !== null) {
      get().clearWatchLocation();
    }

    const id = watchCurrentLocation(location => {
      set({
        lastKnowLocation: location,
        userLocationsList: [...get().userLocationsList, location],
      });
    });
    set({watchId: id});
  },

  clearWatchLocation: () => {
    const watchId = get().watchId;
    if (watchId !== null) {
      clearWatchLocation(watchId);
    }
  },
}));
