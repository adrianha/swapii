import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import baseReducer from './baseReducer';
import filmsReducer from './filmsReducer';
import peopleReducer from './peopleReducer';
import planetsReducer from './planetsReducer';
import speciesesReducer from './speciesesReducer';
import starshipsReducer from './starshipsReducer';
import vehiclesReducer from './vehiclesReducer';

const rootReducer = combineReducers({
  base: baseReducer,
  films: filmsReducer,
  people: peopleReducer,
  planets: planetsReducer,
  specieses: speciesesReducer,
  starships: starshipsReducer,
  vehicles: vehiclesReducer,
  routing: routerReducer
});

export default rootReducer;
