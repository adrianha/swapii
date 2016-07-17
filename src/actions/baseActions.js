import * as types from '../constants/actionTypes';
import firebase from 'firebase';

export function fetchBaseStart() {
  return {
    type: types.FETCH_BASE_START
  };
}

export function fetchBaseDone() {
  return {
    type: types.FETCH_BASE_DONE
  };
}

export function receiveBase(base) {
  return {
    type: types.RECEIVE_BASE,
    base
  };
}

export function fetchBase() {
  return (dispatch) => {
    dispatch(fetchBaseStart());

    firebase.initializeApp({
      apiKey: "AIzaSyBglHqGIR06X3AaJkriQH7MMgMeVMjl-iE",
      authDomain: "swapii-5568e.firebaseapp.com",
      databaseURL: "https://swapii-5568e.firebaseio.com",
      storageBucket: "swapii-5568e.appspot.com"
    });

    firebase.database().ref().once('value')
      .then(snapshot => {
        dispatch(receiveBase(snapshot.val()));
        dispatch(fetchBaseDone());
      })
      .catch(res => {
        console.log('Catch fetchBase: ', res); //eslint-disable-line
        dispatch(fetchBaseDone());
      });
  };
}
