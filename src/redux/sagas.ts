import { all } from 'redux-saga/effects';
import { locationsSagas } from './locations/sagas';

export default function* rootSaga() {
  yield all([locationsSagas()]);
}
