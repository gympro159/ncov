import * as Types from './../constants/ActionType';

var initialState = [];

const patientsVN = (state = initialState, action) => {
    var { patient, id } = action;
    var index = -1;
    switch (action.type) {
        case Types.FETCH_PATIENTS:
            return [...action.patients];
        case Types.ADD_PATIENT:
            state.push(patient);
            return [...state];
        case Types.UPDATE_PATIENT:
            index = findIndex(state, patient.id);
            state[index] = patient;
            return [...state];
        case Types.DELETE_PATIENT:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        default: return [...state];
    }
};

var findIndex = (patients, id) => {
    var result = -1;
    patients.forEach((patient, index) => {
        if (patient.id === id) {
            result = index;
        }
    });
    return result;
}

export default patientsVN;