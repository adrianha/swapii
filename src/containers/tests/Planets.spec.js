import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Planets } from '../Planets';

describe('<Planets />', () => {
  it('should have a class .planets', () => {
    const props = {
      base: {
        isFetching: false,
        planets: []
      }
    };
    expect(shallow(<Planets {...props} />).is('.planets')).to.equal(true);
  });
});
