import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Person } from '../Person';

describe('<Person />', () => {
  it('should have a class .person', () => {
    const props = {
      people: {
        isFetching: false,
        detail: {
          name: 'Luke Skywalker'
        }
      }
    };
    expect(shallow(<Person {...props} />).is('.person')).to.equal(true);
  });
});
