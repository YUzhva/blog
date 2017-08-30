import { takeLatest, call, put } from 'redux-saga/effects';

import { fetchRequest } from './../../utils';

import { getAPIDataLoaded, getAPIDataError } from './actions';

import {
  GET_API_DATA,
} from './constants';

function* getApiData() {
  const { result, error } = yield call(fetchRequest, '/get', { method: 'get' });

  if (error) {
    yield put(getAPIDataError(error));
  }

  yield put(getAPIDataLoaded(result));
}

function* apiData() {
  yield takeLatest(GET_API_DATA, getApiData);
}

export default apiData;
