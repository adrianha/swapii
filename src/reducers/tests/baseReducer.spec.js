import { expect } from 'chai';
import * as ActionTypes from '../../constants/actionTypes';
import baseReducer from '../baseReducer';

describe('baseReducer', () => {
  const getInitialState = () => {
    return {
      isFetching: false
    };
  };

  it('should have initialState by default', () => {
    const action = {
      type: 'undefined'
    };
    const expected = getInitialState();

    expect(baseReducer(getInitialState(), action))
      .to.deep.equal(expected);
  });

  it('should handle RECEIVE_BASE', () => {
    const action = {
      type: ActionTypes.RECEIVE_BASE,
      base: {
        films: ['A new Hope', 'The Empire Strikes Back']
      }
    };
    const expected = {
      isFetching: false,
      films: ['A new Hope', 'The Empire Strikes Back']
    };

    expect(baseReducer(getInitialState(), action))
      .to.deep.equal(expected);
  });
});
