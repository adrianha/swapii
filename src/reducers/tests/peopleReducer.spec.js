import { expect } from 'chai';
import * as ActionTypes from '../../constants/actionTypes';
import peopleReducer from '../peopleReducer';

describe('peopleReducer', () => {
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

    expect(peopleReducer(getInitialState(), action))
      .to.deep.equal(expected);
  });

  it('should handle RECEIVE_PEOPLE', () => {
    const action = {
      type: ActionTypes.RECEIVE_PEOPLE,
      data: {
        "count": 87,
      	"next": "http://swapi.co/api/people/?page=2",
      	"previous": null,
        "results": [
      		{
      			"name": "Luke Skywalker",
      			"height": "172",
      			"mass": "77",
      			"hair_color": "blond",
      			"skin_color": "fair",
      			"eye_color": "blue",
      			"birth_year": "19BBY",
      			"gender": "male",
      			"homeworld": "http://swapi.co/api/planets/1/",
      			"films": [
      				"http://swapi.co/api/films/6/",
      				"http://swapi.co/api/films/3/",
      				"http://swapi.co/api/films/2/",
      				"http://swapi.co/api/films/1/",
      				"http://swapi.co/api/films/7/"
      			],
      			"species": [
      				"http://swapi.co/api/species/1/"
      			],
      			"vehicles": [
      				"http://swapi.co/api/vehicles/14/",
      				"http://swapi.co/api/vehicles/30/"
      			],
      			"starships": [
      				"http://swapi.co/api/starships/12/",
      				"http://swapi.co/api/starships/22/"
      			],
      			"created": "2014-12-09T13:50:51.644000Z",
      			"edited": "2014-12-20T21:17:56.891000Z",
      			"url": "http://swapi.co/api/people/1/"
      		}
        ]
      }
    };
    const expected = {
      isFetching: false,
      isFetchingMore: false,
      data: {
        "count": 87,
      	"next": "http://swapi.co/api/people/?page=2",
      	"previous": null,
        "results": [
      		{
      			"name": "Luke Skywalker",
      			"height": "172",
      			"mass": "77",
      			"hair_color": "blond",
      			"skin_color": "fair",
      			"eye_color": "blue",
      			"birth_year": "19BBY",
      			"gender": "male",
      			"homeworld": "http://swapi.co/api/planets/1/",
      			"films": [
      				"http://swapi.co/api/films/6/",
      				"http://swapi.co/api/films/3/",
      				"http://swapi.co/api/films/2/",
      				"http://swapi.co/api/films/1/",
      				"http://swapi.co/api/films/7/"
      			],
      			"species": [
      				"http://swapi.co/api/species/1/"
      			],
      			"vehicles": [
      				"http://swapi.co/api/vehicles/14/",
      				"http://swapi.co/api/vehicles/30/"
      			],
      			"starships": [
      				"http://swapi.co/api/starships/12/",
      				"http://swapi.co/api/starships/22/"
      			],
      			"created": "2014-12-09T13:50:51.644000Z",
      			"edited": "2014-12-20T21:17:56.891000Z",
      			"url": "http://swapi.co/api/people/1/"
      		}
        ]
      },
      detail: {}
    };

    expect(peopleReducer(getInitialState(), action))
      .to.deep.equal(expected);
  });

  it('should handle RECEIVE_PERSON', () => {
    const action = {
      type: ActionTypes.RECEIVE_PERSON,
      detail: {
        "name": "Luke Skywalker",
      	"height": "172",
      	"mass": "77",
      	"hair_color": "blond",
      	"skin_color": "fair",
      	"eye_color": "blue",
      	"birth_year": "19BBY",
      	"gender": "male",
      	"homeworld": "http://swapi.co/api/planets/1/"
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
        "name": "Luke Skywalker",
      	"height": "172",
      	"mass": "77",
      	"hair_color": "blond",
      	"skin_color": "fair",
      	"eye_color": "blue",
      	"birth_year": "19BBY",
      	"gender": "male",
      	"homeworld": "http://swapi.co/api/planets/1/"
      }
    };

    expect(peopleReducer(getInitialState(), action))
      .to.deep.equal(expected);
  });
});
