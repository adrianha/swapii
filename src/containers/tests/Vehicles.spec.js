import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Vehicles } from '../Vehicles';

describe('<Vehicles />', () => {
  it('should have a class .vehicles', () => {
    const props = {
      base: {
        isFetching: false,
        vehicles: []
      }
    };
    expect(shallow(<Vehicles {...props} />).is('.vehicles')).to.equal(true);
  });
});
