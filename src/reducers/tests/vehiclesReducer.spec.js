import { expect } from 'chai';
import * as ActionTypes from '../../constants/actionTypes';
import vehiclesReducer from '../vehiclesReducer';

describe('vehiclesReducer', () => {
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

    expect(vehiclesReducer(getInitialState(), action))
      .to.deep.equal(expected);
  });

  it('should handle RECEIVE_VEHICLES', () => {
    const action = {
      type: ActionTypes.RECEIVE_VEHICLES,
      data: {
        "count": 39,
      	"next": "http://swapi.co/api/vehicles/?page=2",
      	"previous": null,
      	"results": [
      		{
      			"name": "Sand Crawler",
      			"model": "Digger Crawler",
      			"manufacturer": "Corellia Mining Corporation",
      			"cost_in_credits": "150000",
      			"length": "36.8",
      			"max_atmosphering_speed": "30",
      			"crew": "46",
      			"passengers": "30",
      			"cargo_capacity": "50000",
      			"consumables": "2 months",
      			"vehicle_class": "wheeled",
      			"pilots": [],
      			"films": [
      				"http://swapi.co/api/films/5/",
      				"http://swapi.co/api/films/1/"
      			],
      			"created": "2014-12-10T15:36:25.724000Z",
      			"edited": "2014-12-22T18:21:15.523587Z",
      			"url": "http://swapi.co/api/vehicles/4/"
      		}
        ]
      }
    };
    const expected = {
      isFetching: false,
      isFetchingMore: false,
      data: {
        "count": 39,
      	"next": "http://swapi.co/api/vehicles/?page=2",
      	"previous": null,
      	"results": [
      		{
      			"name": "Sand Crawler",
      			"model": "Digger Crawler",
      			"manufacturer": "Corellia Mining Corporation",
      			"cost_in_credits": "150000",
      			"length": "36.8",
      			"max_atmosphering_speed": "30",
      			"crew": "46",
      			"passengers": "30",
      			"cargo_capacity": "50000",
      			"consumables": "2 months",
      			"vehicle_class": "wheeled",
      			"pilots": [],
      			"films": [
      				"http://swapi.co/api/films/5/",
      				"http://swapi.co/api/films/1/"
      			],
      			"created": "2014-12-10T15:36:25.724000Z",
      			"edited": "2014-12-22T18:21:15.523587Z",
      			"url": "http://swapi.co/api/vehicles/4/"
      		}
        ]
      },
      detail: {}
    };

    expect(vehiclesReducer(getInitialState(), action))
      .to.deep.equal(expected);
  });

  it('should handle RECEIVE_VEHICLE', () => {
    const action = {
      type: ActionTypes.RECEIVE_VEHICLE,
      detail: {
        "name": "Snowspeeder",
      	"model": "t-47 airspeeder",
      	"manufacturer": "Incom corporation",
      	"cost_in_credits": "unknown",
      	"length": "4.5",
      	"max_atmosphering_speed": "650",
      	"crew": "2",
      	"passengers": "0",
      	"cargo_capacity": "10",
      	"consumables": "none",
      	"vehicle_class": "airspeeder"
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
        "name": "Snowspeeder",
      	"model": "t-47 airspeeder",
      	"manufacturer": "Incom corporation",
      	"cost_in_credits": "unknown",
      	"length": "4.5",
      	"max_atmosphering_speed": "650",
      	"crew": "2",
      	"passengers": "0",
      	"cargo_capacity": "10",
      	"consumables": "none",
      	"vehicle_class": "airspeeder"
      }
    };

    expect(vehiclesReducer(getInitialState(), action))
      .to.deep.equal(expected);
  });
});
