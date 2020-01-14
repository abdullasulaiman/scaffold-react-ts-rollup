import { combineReducers } from 'redux';
import { numberCollectionReducer, NumberCollectionState } from './number-collection.reducer';

export interface IState {
    numberCollection: NumberCollectionState;
}

export const rootReducers = combineReducers<IState>({
    numberCollection: numberCollectionReducer,
});
