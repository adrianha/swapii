import { expect } from 'chai';
import * as ActionTypes from '../../constants/actionTypes';
import starshipsReducer from '../starshipsReducer';

describe('starshipsReducer', () => {
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

    expect(starshipsReducer(getInitialState(), action))
      .to.deep.equal(expected);
  });

  it('should handle RECEIVE_STARSHIPS', () => {
    const action = {
      type: ActionTypes.RECEIVE_STARSHIPS,
      data: {
        "count": 37,
      	"next": "http://swapi.co/api/starships/?page=2",
      	"previous": null,
      	"results": [
      		{
      			"name": "Sentinel-class landing craft",
      			"model": "Sentinel-class landing craft",
      			"manufacturer": "Sienar Fleet Systems, Cyngus Spaceworks",
      			"cost_in_credits": "240000",
      			"length": "38",
      			"max_atmosphering_speed": "1000",
      			"crew": "5",
      			"passengers": "75",
      			"cargo_capacity": "180000",
      			"consumables": "1 month",
      			"hyperdrive_rating": "1.0",
      			"MGLT": "70",
      			"starship_class": "landing craft",
      			"pilots": [],
      			"films": [
      				"http://swapi.co/api/films/1/"
      			],
      			"created": "2014-12-10T15:48:00.586000Z",
      			"edited": "2014-12-22T17:35:44.431407Z",
      			"url": "http://swapi.co/api/starships/5/"
      		}
        ]
      }
    };
    const expected = {
      isFetching: false,
      isFetchingMore: false,
      data: {
        "count": 37,
      	"next": "http://swapi.co/api/starships/?page=2",
      	"previous": null,
      	"results": [
      		{
      			"name": "Sentinel-class landing craft",
      			"model": "Sentinel-class landing craft",
      			"manufacturer": "Sienar Fleet Systems, Cyngus Spaceworks",
      			"cost_in_credits": "240000",
      			"length": "38",
      			"max_atmosphering_speed": "1000",
      			"crew": "5",
      			"passengers": "75",
      			"cargo_capacity": "180000",
      			"consumables": "1 month",
      			"hyperdrive_rating": "1.0",
      			"MGLT": "70",
      			"starship_class": "landing craft",
      			"pilots": [],
      			"films": [
      				"http://swapi.co/api/films/1/"
      			],
      			"created": "2014-12-10T15:48:00.586000Z",
      			"edited": "2014-12-22T17:35:44.431407Z",
      			"url": "http://swapi.co/api/starships/5/"
      		}
        ]
      },
      detail: {}
    };

    expect(starshipsReducer(getInitialState(), action))
      .to.deep.equal(expected);
  });

  it('should handle RECEIVE_STARSHIP', () => {
    const action = {
      type: ActionTypes.RECEIVE_STARSHIP,
      detail: {
        "name": "Death Star",
      	"model": "DS-1 Orbital Battle Station",
      	"manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
      	"cost_in_credits": "1000000000000",
      	"length": "120000",
      	"max_atmosphering_speed": "n/a",
      	"crew": "342953",
      	"passengers": "843342",
      	"cargo_capacity": "1000000000000",
      	"consumables": "3 years",
      	"hyperdrive_rating": "4.0",
      	"MGLT": "10"
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
        "name": "Death Star",
      	"model": "DS-1 Orbital Battle Station",
      	"manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
      	"cost_in_credits": "1000000000000",
      	"length": "120000",
      	"max_atmosphering_speed": "n/a",
      	"crew": "342953",
      	"passengers": "843342",
      	"cargo_capacity": "1000000000000",
      	"consumables": "3 years",
      	"hyperdrive_rating": "4.0",
      	"MGLT": "10"
      }
    };

    expect(starshipsReducer(getInitialState(), action))
      .to.deep.equal(expected);
  });
});
