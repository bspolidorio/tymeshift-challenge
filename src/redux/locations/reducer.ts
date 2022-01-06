import { ActionType, getType } from 'typesafe-actions';
import { LocationModel } from '../../api/models/LocationModel';
import { AsyncActionState } from '../types';
import { fetchLocations } from './actions';

export type LocationsAction = ActionType<typeof fetchLocations>;

export type LocationsState = Readonly<{
  data?: LocationModel[];
  fetch: AsyncActionState;
}>;

const initialState: LocationsState = {
  fetch: {
    isError: false,
    isLoading: false,
  },
};

const reducer = (
  state: LocationsState = initialState,
  action: LocationsAction,
): LocationsState => {
  switch (action.type) {
    case getType(fetchLocations.request): {
      return {
        ...state,
        fetch: {
          isLoading: true,
          isError: false,
          isSuccess: false,
        },
      };
    }
    case getType(fetchLocations.success): {
      return {
        ...state,
        data: action.payload.locations,
        fetch: {
          isLoading: false,
          isError: false,
          isSuccess: true,
        },
      };
    }
    case getType(fetchLocations.failure): {
      return {
        ...state,
        fetch: {
          isLoading: false,
          isError: true,
          isSuccess: false,
        },
      };
    }

    default:
      return state;
  }
};

export default reducer;
