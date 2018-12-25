import * as actionType from '../constants/userinfo';

export const login = data => ({
    type: actionType.USERINFO_LOGIN,
    data
});

export const city = data => ({
    type: actionType.UPDATE_CITY,
    data
});
