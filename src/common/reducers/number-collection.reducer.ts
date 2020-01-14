import { actionIds, IBaseAction } from '../';

export type NumberCollectionState = number[];

export const numberCollectionReducer = (state: NumberCollectionState = [0], action: IBaseAction) => {
    switch (action.type) {
        case actionIds.GET_NUMBER_REQUEST_COMPLETED:
            return [...state, action.payload];
    }
    return state;
};
