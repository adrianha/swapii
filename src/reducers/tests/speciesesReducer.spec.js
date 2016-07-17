import { expect } from 'chai';
import * as ActionTypes from '../../constants/actionTypes';
import speciesesReducer from '../speciesesReducer';

describe('speciesesReducer', () => {
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

    expect(speciesesReducer(getInitialState(), action))
      .to.deep.equal(expected);
  });

  it('should handle RECEIVE_SPECIESES', () => {
    const action = {
      type: ActionTypes.RECEIVE_SPECIESES,
      data: {
        "count": 37,
      	"next": "http://swapi.co/api/species/?page=2",
      	"previous": null,
      	"results": [
      		{
      			"name": "Rodian",
      			"classification": "sentient",
      			"designation": "reptilian",
      			"average_height": "170",
      			"skin_colors": "green, blue",
      			"hair_colors": "n/a",
      			"eye_colors": "black",
      			"average_lifespan": "unknown",
      			"homeworld": "http://swapi.co/api/planets/23/",
      			"language": "Galatic Basic",
      			"people": [
      				"http://swapi.co/api/people/15/"
      			],
      			"films": [
      				"http://swapi.co/api/films/1/"
      			],
      			"created": "2014-12-10T17:05:26.471000Z",
      			"edited": "2014-12-20T21:36:42.144000Z",
      			"url": "http://swapi.co/api/species/4/"
      		}
        ]
      }
    };
    const expected = {
      isFetching: false,
      isFetchingMore: false,
      data: {
        "count": 37,
      	"next": "http://swapi.co/api/species/?page=2",
      	"previous": null,
      	"results": [
      		{
      			"name": "Rodian",
      			"classification": "sentient",
      			"designation": "reptilian",
      			"average_height": "170",
      			"skin_colors": "green, blue",
      			"hair_colors": "n/a",
      			"eye_colors": "black",
      			"average_lifespan": "unknown",
      			"homeworld": "http://swapi.co/api/planets/23/",
      			"language": "Galatic Basic",
      			"people": [
      				"http://swapi.co/api/people/15/"
      			],
      			"films": [
      				"http://swapi.co/api/films/1/"
      			],
      			"created": "2014-12-10T17:05:26.471000Z",
      			"edited": "2014-12-20T21:36:42.144000Z",
      			"url": "http://swapi.co/api/species/4/"
      		}
        ]
      },
      detail: {}
    };

    expect(speciesesReducer(getInitialState(), action))
      .to.deep.equal(expected);
  });

  it('should handle RECEIVE_SPECIES', () => {
    const action = {
      type: ActionTypes.RECEIVE_SPECIES,
      detail: {
        "name": "Human",
      	"classification": "mammal",
      	"designation": "sentient",
      	"average_height": "180",
      	"skin_colors": "caucasian, black, asian, hispanic",
      	"hair_colors": "blonde, brown, black, red",
      	"eye_colors": "brown, blue, green, hazel, grey, amber",
      	"average_lifespan": "120",
      	"homeworld": "http://swapi.co/api/planets/9/",
      	"language": "Galactic Basic"
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
        "name": "Human",
      	"classification": "mammal",
      	"designation": "sentient",
      	"average_height": "180",
      	"skin_colors": "caucasian, black, asian, hispanic",
      	"hair_colors": "blonde, brown, black, red",
      	"eye_colors": "brown, blue, green, hazel, grey, amber",
      	"average_lifespan": "120",
      	"homeworld": "http://swapi.co/api/planets/9/",
      	"language": "Galactic Basic"
      }
    };

    expect(speciesesReducer(getInitialState(), action))
      .to.deep.equal(expected);
  });
});
