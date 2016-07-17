import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Planet } from '../Planet';

describe('<Planet />', () => {
  it('should have a class .planet', () => {
    const props = {
      planets: {
        isFetching: false,
        detail: {
          name: 'Yavin IV'
        }
      }
    };
    expect(shallow(<Planet {...props} />).is('.planet')).to.equal(true);
  });
});
