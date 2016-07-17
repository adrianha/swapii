import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Film } from '../Film';

describe('<Film />', () => {
  it('should have a class .film', () => {
    const props = {
      films: {
        detail: {
          title: 'A New Hope'
        }
      }
    };
    expect(shallow(<Film {...props} />).is('.film')).to.equal(true);
  });
});
