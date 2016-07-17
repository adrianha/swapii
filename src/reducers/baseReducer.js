import { FETCH_BASE_START, FETCH_BASE_DONE, RECEIVE_BASE  } from '../constants/actionTypes';
const initialState = {
  isFetching: false
};

export default function baseReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_BASE_START:
      return Object.assign({}, state, {
        isFetching: true
      });

    case FETCH_BASE_DONE:
      return Object.assign({}, state, {
        isFetching: false
      });

    case RECEIVE_BASE:
      return Object.assign({}, state, action.base);

    default:
      return state;
  }
}
