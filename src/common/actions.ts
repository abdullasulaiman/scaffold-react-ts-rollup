import { actionIds, IBaseAction } from '.';

export const numberRequestStartAction = (): IBaseAction => ({
    payload: null,
    type: actionIds.GET_NUMBER_REQUEST_START,
});

export const numberRequestCompletedAction = (numberGenerated: number): IBaseAction => ({
    payload: numberGenerated,
    type: actionIds.GET_NUMBER_REQUEST_COMPLETED,
});
