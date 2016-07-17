import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Vehicle } from '../Vehicle';

describe('<Vehicle />', () => {
  it('should have a class .vehicle', () => {
    const props = {
      vehicles: {
        isFetching: false,
        detail: {
          name: 'Sand Crawler'
        }
      }
    };
    expect(shallow(<Vehicle {...props} />).is('.vehicle')).to.equal(true);
  });
});
