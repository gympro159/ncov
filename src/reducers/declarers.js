import * as Types from './../constants/ActionType';

var initialState = [];

const declarers = (state = initialState, action) => {
    var { declarer, id } = action;
    var index = -1;
    switch (action.type) {
        case Types.FETCH_DECLARERS:
            return [...action.declarers];
        case Types.ADD_DECLARER:
            state.push(declarer);
            return [...state];
        case Types.UPDATE_DECLARER:
            index = findIndex(state, declarer.id);
            state[index] = declarer;
            return [...state];
        case Types.DELETE_DECLARER:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        default: return [...state];
    }
};

var findIndex = (declarers, id) => {
    var result = -1;
    declarers.forEach((declarer, index) => {
        if (declarer.id === id) {
            result = index;
        }
    });
    return result;
}

export default declarers;