import { FETCH_PEOPLE_START, FETCH_PEOPLE_DONE, RECEIVE_PEOPLE, FETCH_PERSON_START, FETCH_PERSON_DONE, RECEIVE_PERSON, FETCH_MORE_PEOPLE_START, FETCH_MORE_PEOPLE_DONE, RECEIVE_MORE_PEOPLE } from '../constants/actionTypes';
const initialState = {
  isFetching: false,
  isFetchingMore: false,
  data: {
    count: '',
    next: '',
    previous: '',
    results: []
  },
  detail: {}
};

export default function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PEOPLE_START:
      return Object.assign({}, state, {
        isFetching: true
      });

    case FETCH_PEOPLE_DONE:
      return Object.assign({}, state, {
        isFetching: false
      });

    case RECEIVE_PEOPLE:
      return Object.assign({}, state, {
        data: action.data
      });

    case FETCH_PERSON_START:
      return Object.assign({}, state, {
        isFetching: true
      });

    case FETCH_PERSON_DONE:
      return Object.assign({}, state, {
        isFetching: false
      });

    case RECEIVE_PERSON:
      return Object.assign({}, state, {
        detail: action.detail
      });

    case FETCH_MORE_PEOPLE_START:
      return Object.assign({}, state, {
        isFetchingMore: true
      });

    case FETCH_MORE_PEOPLE_DONE:
      return Object.assign({}, state, {
        isFetchingMore: false
      });

    case RECEIVE_MORE_PEOPLE:
      return Object.assign({}, state, {
        data: {
          count: action.data.count,
          next: action.data.next,
          prev: action.data.prev,
          results: state.data.results.concat(action.data.results)
        }
      });

    default:
      return state;
  }
}
