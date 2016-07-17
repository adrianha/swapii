import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Starships } from '../Starships';

describe('<Starships />', () => {
  it('should have a class .starships', () => {
    const props = {
      base: {
        isFetching: false,
        starships: []
      }
    };
    expect(shallow(<Starships {...props} />).is('.starships')).to.equal(true);
  });
});
