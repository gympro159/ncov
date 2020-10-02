import * as Types from "./../constants/ActionType";
import callApi from "./../utils/apiCaller";

//Vietnam
export const actFetchPatientsRequest = () => {
  return (dispatch) => {
    return callApi("vietnam", "GET", null).then((res) => {
      dispatch(actFetchPatients(res.data));
    });
  };
};

export const actFetchPatients = (patients) => {
  return {
    type: Types.FETCH_PATIENTS,
    patients,
  };
};

export const actAddPatientRequest = (patient) => {
  return (dispatch) => {
    return callApi("vietnam", "POST", patient).then((res) => {
      dispatch(actAddPatient(res.data));
    });
  };
};

export const actAddPatient = (patient) => {
  return {
    type: Types.ADD_PATIENT,
    patient,
  };
};

export const actUpdatePatientRequest = (patient) => {
  return (dispatch) => {
    return callApi(`vietnam`, "PUT", patient).then((res) => {
      if (res) {
        dispatch(actUpdatePatient(res.data));
      }
    });
  };
};

export const actUpdatePatient = (patient) => {
  return {
    type: Types.UPDATE_PATIENT,
    patient,
  };
};

export const actDeletePatientRequest = (id) => {
  return (dispatch) => {
    return callApi(`vietnam/${id}`, "DELETE", null).then((res) => {
      dispatch(actDeletePatient(id));
    });
  };
};

export const actDeletePatient = (id) => {
  return {
    type: Types.DELETE_PATIENT,
    id,
  };
};

//World
export const actFetchPatientsWorldRequest = () => {
  return (dispatch) => {
    return callApi("/world", "GET", null).then((res) => {
      dispatch(actFetchPatientsWorld(res.data));
    });
  };
};

export const actFetchPatientsWorld = (countries) => {
  return {
    type: Types.FETCH_PATIENTS_WORLD,
    countries,
  };
};

export const actUpdatePatientsWorldRequest = (country) => {
  return (dispatch) => {
    return callApi(`/world`, "PUT", country).then((res) => {
      if (res) {
        dispatch(actUpdatePatientsWorld(res.data));
      }
    });
  };
};

export const actUpdatePatientsWorld = (country) => {
  return {
    type: Types.UPDATE_PATIENTS_WORLD,
    country,
  };
};

//Accounts
export const actFetchAccountsRequest = () => {
  return (dispatch) => {
    return callApi("/account", "GET", null).then((res) => {
      dispatch(actFetchAccounts(res.data));
    });
  };
};

export const actFetchAccounts = (accounts) => {
  return {
    type: Types.FETCH_ACCOUNTS,
    accounts,
  };
};

export const actUpdateAccountRequest = (account) => {
  return (dispatch) => {
    return callApi(`/account`, "PUT", account).then((res) => {
      if (res) {
        dispatch(actUpdateAccount(res.data));
      }
    });
  };
};

export const actUpdateAccount = (account) => {
  localStorage.removeItem("user");
  return {
    type: Types.UPDATE_ACCOUNT,
    account,
  };
};

//Declarer
export const actFetchDeclarersRequest = () => {
  return (dispatch) => {
    return callApi("declarer", "GET", null).then((res) => {
      dispatch(actFetchDeclarers(res.data));
    });
  };
};

export const actFetchDeclarers = (declarers) => {
  return {
    type: Types.FETCH_DECLARERS,
    declarers,
  };
};

export const actAddDeclarerRequest = (declarer) => {
  return (dispatch) => {
    return callApi("declarer", "POST", declarer).then((res) => {
      dispatch(actAddDeclarer(res.data));
    });
  };
};

export const actAddDeclarer = (declarer) => {
  return {
    type: Types.ADD_DECLARER,
    declarer,
  };
};

export const actUpdateDeclarerRequest = (declarer) => {
  return (dispatch) => {
    return callApi(`declarer`, "PUT", declarer).then((res) => {
      if (res) {
        dispatch(actUpdateDeclarer(res.data));
      }
    });
  };
};

export const actUpdateDeclarer = (declarer) => {
  return {
    type: Types.UPDATE_DECLARER,
    declarer,
  };
};

export const actDeleteDeclarerRequest = (id) => {
  return (dispatch) => {
    return callApi(`declarer/${id}`, "DELETE", null).then((res) => {
      dispatch(actDeleteDeclarer(id));
    });
  };
};

export const actDeleteDeclarer = (id) => {
  return {
    type: Types.DELETE_DECLARER,
    id,
  };
};