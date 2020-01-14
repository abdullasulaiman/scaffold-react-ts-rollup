// all is an effect combinator, it just run all effects in parallel and wait for
// them to be completed (quite corresponding to Promise.all).
import { all, fork } from 'redux-saga/effects';
import { watchNewGeneratedNumberRequestStart } from './number-collection.sagas';

export const rootSaga = function* root() {
  yield all([fork(watchNewGeneratedNumberRequestStart)]);
};