import * as types from '../constants/actionTypes';
import RequestHelper from '../utils/requestHelper';

export function fetchSpeciesesStart() {
  return {
    type: types.FETCH_SPECIESES_START
  };
}

export function fetchSpeciesesDone() {
  return {
    type: types.FETCH_SPECIESES_DONE
  };
}

export function receiveSpecieses(data) {
  return {
    type: types.RECEIVE_SPECIESES,
    data
  };
}

export function fetchSpecieses() {
  return (dispatch) => {
    dispatch(fetchSpeciesesStart());

    const payload = {
      method: 'get',
      url: 'species'
    };

    RequestHelper.request(payload)
      .then((res) => {
        dispatch(fetchSpeciesesDone());
        dispatch(receiveSpecieses(res.data));
      })
      .catch((res) => {
        console.log('Catch fetchSpecieses: ', res); //eslint-disable-line
      });
  };
}

export function fetchSpeciesStart() {
  return {
    type: types.FETCH_SPECIES_START
  };
}

export function fetchSpeciesDone() {
  return {
    type: types.FETCH_SPECIES_DONE
  };
}

export function receiveSpecies(detail) {
  return {
    type: types.RECEIVE_SPECIES,
    detail
  };
}

export function fetchSpecies(id) {
  return (dispatch) => {
    dispatch(fetchSpeciesStart());

    const payload = {
      url: `species/${id}`
    };

    RequestHelper.request(payload)
      .then((res) => {
        dispatch(fetchSpeciesDone());
        dispatch(receiveSpecies(res.data));
      })
      .catch((res) => {
        console.log('Catch fetchSpecies: ', res); //eslint-disable-line
      });
  };
}
