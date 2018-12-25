import * as actionType from '../constants/userinfo';

const initialState = {};

export function userInfo(state = initialState, action) {
    switch (action.type) {
    case actionType.USERINFO_LOGIN:
        return action.data;
    case actionType.UPDATE_CITY:
        return action.data;
    default:
        return state;
    }
}
