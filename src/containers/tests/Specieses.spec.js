import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Specieses } from '../Specieses';

describe('<Specieses />', () => {
  it('should have a class .specieses', () => {
    const props = {
      base: {
        isFetching: false,
        species: []
      }
    };
    expect(shallow(<Specieses {...props} />).is('.specieses')).to.equal(true);
  });
});
