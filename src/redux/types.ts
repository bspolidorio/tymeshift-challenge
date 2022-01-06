import { LocationsState } from './locations/reducer';

export type RootState = Readonly<{
  locations: LocationsState;
}>;

export interface AsyncActionState {
  isError: boolean;
  isLoading: boolean;
  isSuccess?: boolean;
}
