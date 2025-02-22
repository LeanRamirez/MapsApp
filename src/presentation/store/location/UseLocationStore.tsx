import {create} from 'zustand';
import {Location} from '../../../infrastructure/intefaces/location';
import {GetCurrentLocation} from '../../../actions/location/location';

interface LocationState {
  lastKnowLocation: Location | null;

  getLocation: () => Promise<Location | null>;
}

export const UseLocationStore = create<LocationState>()((set, get) => ({
  lastKnowLocation: null,

  getLocation: async () => {
    const location = await GetCurrentLocation();
    set({lastKnowLocation: location});
    return location;
  },
}));
