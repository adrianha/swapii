import * as types from '../constants/actionTypes';
import RequestHelper from '../utils/requestHelper';
import StringHelper from '../utils/stringHelper';

export function fetchPeopleStart() {
  return {
    type: types.FETCH_PEOPLE_START
  };
}

export function fetchPeopleDone() {
  return {
    type: types.FETCH_PEOPLE_DONE
  };
}

export function receivePeople(data) {
  return {
    type: types.RECEIVE_PEOPLE,
    data
  };
}

export function fetchPeople() {
  return (dispatch) => {
    dispatch(fetchPeopleStart());

    const payload = {
      method: 'get',
      url: 'people'
    };

    RequestHelper.request(payload)
      .then((res) => {
        dispatch(fetchPeopleDone());
        dispatch(receivePeople(res.data));
      })
      .catch((res) => {
        console.log('Catch fetchPeople: ', res); //eslint-disable-line
        dispatch(fetchPeopleDone());
      });
  };
}

export function fetchPersonStart() {
  return {
    type: types.FETCH_PERSON_START
  };
}

export function fetchPersonDone() {
  return {
    type: types.FETCH_PERSON_DONE
  };
}

export function receivePerson(detail) {
  return {
    type: types.RECEIVE_PERSON,
    detail
  };
}

export function fetchPerson(id) {
  return (dispatch) => {
    dispatch(fetchPersonStart());

    const payload = {
      url: `people/${id}`
    };

    RequestHelper.request(payload)
      .then((res) => {
        dispatch(fetchPersonDone());
        dispatch(receivePerson(res.data));
      })
      .catch((res) => {
        console.log('Catch fetchPerson: ', res); //eslint-disable-line
        dispatch(fetchPersonDone());
      });
  };
}

export function fetchMorePeopleStart() {
  return {
    type: types.FETCH_MORE_PEOPLE_START
  };
}

export function fetchMorePeopleDone() {
  return {
    type: types.FETCH_MORE_PEOPLE_DONE
  };
}

export function receiveMorePeople(data) {
  return {
    type: types.RECEIVE_MORE_PEOPLE,
    data
  };
}

export function fetchMorePeople() {
  return (dispatch, getState) => {
    const next = getState().people.data.next;
    if (next === '' || next === null) {
      dispatch(fetchMorePeopleDone());
    } else {
      dispatch(fetchMorePeopleStart());

      const payload = {
        url: StringHelper.getFullRoutes(next)
      };
      RequestHelper.request(payload)
        .then((res) => {
          dispatch(fetchMorePeopleDone());
          dispatch(receiveMorePeople(res.data));
        })
        .catch((res) => {
          console.log('Catch fetchMorePeople: ', res); //eslint-disable-line
          dispatch(fetchMorePeopleDone());
        });
    }
  };
}
