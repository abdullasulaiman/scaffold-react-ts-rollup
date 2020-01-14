import { call, put, takeEvery } from 'redux-saga/effects';
import { actionIds } from '../';
import { numberRequestCompletedAction } from '../actions';
import { generateNewNumber } from '../api';

function* requestNewGeneratedNumber() {
    const generatedNumber = yield call(generateNewNumber);
    yield put(numberRequestCompletedAction(generatedNumber));
}

export function* watchNewGeneratedNumberRequestStart() {
  yield takeEvery(
    actionIds.GET_NUMBER_REQUEST_START,
    requestNewGeneratedNumber,
  );
}