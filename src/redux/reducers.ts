import { LocationChangeAction, RouterState } from 'connected-react-router';
import { Reducer, combineReducers } from 'redux';
import { RootState } from './types';

import { default as locationsReducer } from './locations/reducer';

export default function createReducer(asyncReducers: {
  router: Reducer<RouterState, LocationChangeAction>;
}) {
  return combineReducers<RootState>({
    ...asyncReducers,
    locations: locationsReducer,
  });
}
