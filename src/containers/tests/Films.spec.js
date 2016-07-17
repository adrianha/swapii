import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Films } from '../Films';

describe('<Films />', () => {
  it('should have a class .films', () => {
    const props = {
      base: {
        isFetching: false,
        films: []
      }
    };
    expect(shallow(<Films {...props} />).is('.films')).to.equal(true);
  });
});
