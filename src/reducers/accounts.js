import * as Types from '../constants/ActionType';

var initialState = [];

const accounts = (state = initialState, action) => {
    var { account } = action;
    var index = -1;
    switch (action.type) {
        case Types.FETCH_ACCOUNTS:
            return [...action.accounts];
        case Types.UPDATE_ACCOUNT:
            index = findIndex(state, account.id);
            state[index] = account;
            return [...state];
        default: return [...state];
    }
};

var findIndex = (accounts, id) => {
    var result = -1;
    accounts.forEach((account, index) => {
        if (account.id === id) {
            result = index;
        }
    });
    return result;
}

export default accounts;