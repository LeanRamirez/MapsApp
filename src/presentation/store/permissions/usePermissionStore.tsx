import type {PermissionStatus} from '../../../infrastructure/intefaces/permissions';
import {
  checkLocationPermission,
  requestLocationPermission,
} from '../../../actions/permission/location';
import {create} from 'zustand';

interface PermissionsState {
  locationStatus: PermissionStatus;

  requestLocationPermission: () => Promise<PermissionStatus>;
  checkLocationPermission: () => Promise<PermissionStatus>;
}

export const usePermissionStore = create<PermissionsState>()(set => ({
  locationStatus: 'undetermined',

  requestLocationPermission: async () => {
    const status = await requestLocationPermission();
    set({locationStatus: status});

    return status;
  },

  checkLocationPermission: async () => {
    const status = await checkLocationPermission();
    set({locationStatus: status});

    return status;
  },
}));
