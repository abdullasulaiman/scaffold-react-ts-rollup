export const actionIds = {
    GET_NUMBER_REQUEST_COMPLETED: '[1] NumberGenerator async service returned a new number.',
    GET_NUMBER_REQUEST_START: '[0] Request a new number to the NumberGenerator async service.',
};

export interface IBaseAction {
    type: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any;
}