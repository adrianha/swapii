import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Starship } from '../Starship';

describe('<Starship />', () => {
  it('should have a class .starship', () => {
    const props = {
      starships: {
        isFetching: false,
        detail: {
          name: 'Death Star'
        }
      }
    };
    expect(shallow(<Starship {...props} />).is('.starship')).to.equal(true);
  });
});
