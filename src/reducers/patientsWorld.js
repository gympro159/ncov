import * as Types from '../constants/ActionType';

var initialState = [];

const patientsWorld = (state = initialState, action) => {
    var { country } = action;
    var index = -1;
    switch (action.type) {
        case Types.FETCH_PATIENTS_WORLD:
            return [...action.countries];
        case Types.UPDATE_PATIENTS_WORLD:
            index = findIndex(state, country.id);
            state[index] = country;
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

export default patientsWorld;