import { call, put, takeLatest } from '@redux-saga/core/effects';
import { ActionType, getType } from 'typesafe-actions';
import { LocationModel } from '../../api/models/LocationModel';
import { fetchLocationList } from '../../api/services/LocationService';
import { fetchLocations } from './actions';

export function* fetchLocationsSagas(
  action: ActionType<typeof fetchLocations.request>,
) {
  try {
    const locations: LocationModel[] = yield call(fetchLocationList);

    yield put(fetchLocations.success({ locations }));
  } catch (error) {
    console.error('Error while fetching the locations ->', error);
    yield put(fetchLocations.failure());
  }
}
export function* locationsSagas() {
  yield takeLatest(getType(fetchLocations.request), fetchLocationsSagas);
}
