import { expect } from 'chai';
import * as ActionTypes from '../../constants/actionTypes';
import planetsReducer from '../planetsReducer';

describe('planetsReducer', () => {
  const getInitialState = () => {
    return {
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
  };

  it('should have initialState by default', () => {
    const action = {
      type: 'undefined'
    };
    const expected = getInitialState();

    expect(planetsReducer(getInitialState(), action))
      .to.deep.equal(expected);
  });

  it('should handle RECEIVE_PLANETS', () => {
    const action = {
      type: ActionTypes.RECEIVE_PLANETS,
      data: {
        "count": 61,
      	"next": "http://swapi.co/api/planets/?page=2",
      	"previous": null,
      	"results": [
      		{
      			"name": "Alderaan",
      			"rotation_period": "24",
      			"orbital_period": "364",
      			"diameter": "12500",
      			"climate": "temperate",
      			"gravity": "1 standard",
      			"terrain": "grasslands, mountains",
      			"surface_water": "40",
      			"population": "2000000000",
      			"residents": [
      				"http://swapi.co/api/people/5/",
      				"http://swapi.co/api/people/68/",
      				"http://swapi.co/api/people/81/"
      			],
      			"films": [
      				"http://swapi.co/api/films/6/",
      				"http://swapi.co/api/films/1/"
      			],
      			"created": "2014-12-10T11:35:48.479000Z",
      			"edited": "2014-12-20T20:58:18.420000Z",
      			"url": "http://swapi.co/api/planets/2/"
      		}
        ]
      }
    };
    const expected = {
      isFetching: false,
      isFetchingMore: false,
      data: {
        "count": 61,
      	"next": "http://swapi.co/api/planets/?page=2",
      	"previous": null,
      	"results": [
      		{
      			"name": "Alderaan",
      			"rotation_period": "24",
      			"orbital_period": "364",
      			"diameter": "12500",
      			"climate": "temperate",
      			"gravity": "1 standard",
      			"terrain": "grasslands, mountains",
      			"surface_water": "40",
      			"population": "2000000000",
      			"residents": [
      				"http://swapi.co/api/people/5/",
      				"http://swapi.co/api/people/68/",
      				"http://swapi.co/api/people/81/"
      			],
      			"films": [
      				"http://swapi.co/api/films/6/",
      				"http://swapi.co/api/films/1/"
      			],
      			"created": "2014-12-10T11:35:48.479000Z",
      			"edited": "2014-12-20T20:58:18.420000Z",
      			"url": "http://swapi.co/api/planets/2/"
      		}
        ]
      },
      detail: {}
    };

    expect(planetsReducer(getInitialState(), action))
      .to.deep.equal(expected);
  });

  it('should handle RECEIVE_PLANET', () => {
    const action = {
      type: ActionTypes.RECEIVE_PLANET,
      detail: {
        "name": "Yavin IV",
      	"rotation_period": "24",
      	"orbital_period": "4818",
      	"diameter": "10200",
      	"climate": "temperate, tropical",
      	"gravity": "1 standard",
      	"terrain": "jungle, rainforests",
      	"surface_water": "8",
      	"population": "1000"
      }
    };
    const expected = {
      isFetching: false,
      isFetchingMore: false,
      data: {
        count: '',
        next: '',
        previous: '',
        results: []
      },
      detail: {
        "name": "Yavin IV",
      	"rotation_period": "24",
      	"orbital_period": "4818",
      	"diameter": "10200",
      	"climate": "temperate, tropical",
      	"gravity": "1 standard",
      	"terrain": "jungle, rainforests",
      	"surface_water": "8",
      	"population": "1000"
      }
    };

    expect(planetsReducer(getInitialState(), action))
      .to.deep.equal(expected);
  });
});
