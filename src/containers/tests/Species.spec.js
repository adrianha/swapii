import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Species } from '../Species';

describe('<Species />', () => {
  it('should have a class .species', () => {
    const props = {
      specieses: {
        isFetching: false,
        detail: {
          name: 'Luke Skywalker'
        }
      }
    };
    expect(shallow(<Species {...props} />).is('.species')).to.equal(true);
  });
});
