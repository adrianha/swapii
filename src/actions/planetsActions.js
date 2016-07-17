import * as types from '../constants/actionTypes';
import RequestHelper from '../utils/requestHelper';

export function fetchPlanetsStart() {
  return {
    type: types.FETCH_PLANETS_START
  };
}

export function fetchPlanetsDone() {
  return {
    type: types.FETCH_PLANETS_DONE
  };
}

export function receivePlanets(data) {
  return {
    type: types.RECEIVE_PLANETS,
    data
  };
}

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(fetchPlanetsStart());

    const payload = {
      method: 'get',
      url: 'planets'
    };

    RequestHelper.request(payload)
      .then((res) => {
        dispatch(fetchPlanetsDone());
        dispatch(receivePlanets(res.data));
      })
      .catch((res) => {
        console.log('Catch fetchPlanets: ', res); //eslint-disable-line
      });
  };
}

export function fetchPlanetStart() {
  return {
    type: types.FETCH_PLANET_START
  };
}

export function fetchPlanetDone() {
  return {
    type: types.FETCH_PLANET_DONE
  };
}

export function receivePlanet(detail) {
  return {
    type: types.RECEIVE_PLANET,
    detail
  };
}

export function fetchPlanet(id) {
  return (dispatch) => {
    dispatch(fetchPlanetStart());

    const payload = {
      url: `planets/${id}`
    };

    RequestHelper.request(payload)
      .then((res) => {
        dispatch(fetchPlanetDone());
        dispatch(receivePlanet(res.data));
      })
      .catch((res) => {
        console.log('Catch fetchPlanet: ', res); //eslint-disable-line
      });
  };
}
