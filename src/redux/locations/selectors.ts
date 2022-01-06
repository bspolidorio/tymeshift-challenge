import { RootState } from '../types';

export const getLocationsSelector = (store: RootState) => store?.locations.data;
