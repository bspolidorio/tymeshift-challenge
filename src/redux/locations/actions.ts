import { createAsyncAction } from 'typesafe-actions';
import { LocationModel } from '../../api/models/LocationModel';

export const fetchLocations = createAsyncAction(
  'locationCard/FETCH_LOCATIONS_REQUEST',
  'locationCard/FETCH_LOCATIONS_SUCCESS',
  'locationCard/FETCH_LOCATIONS_FAILURE',
)<{}, { locations: LocationModel[] }, undefined>();
