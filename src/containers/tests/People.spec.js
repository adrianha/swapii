import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { People } from '../People';

describe('<People />', () => {
  it('should have a class .people', () => {
    const props = {
      base: {
        isFetching: false,
        people: []
      }
    };
    expect(shallow(<People {...props} />).is('.people')).to.equal(true);
  });
});
