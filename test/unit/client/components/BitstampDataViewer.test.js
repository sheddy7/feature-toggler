
import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';

import BitstampDataViewer, { convertTimestamp } from '../../../../src/client/components/BitstampDataViewer';

describe('BitstampDataViewer', () => {
  context('component', () => {
    it('should render text from props', () => {
      const fakeData = {
        high: 20,
        last: 15,
        timestamp: 1522093174,
        bid: 13,
        vwap: 12,
        volume: 50,
        low: 11,
        ask: 13,
        open: 16
      };

      const wrapper = render(<BitstampDataViewer data={fakeData} />);

      expect(wrapper.find('div.data-left')).to.have.length(9);
      expect(wrapper.find('div.data-right')).to.have.length(9);
    });
  });

  context('convertTimestamp', () => {
    it('should convert the unix timestamp into a readable date', () => {
      const timestamp = 1522093174,
        expectedResult = '2018-3-26 20:39:34';

      const result = convertTimestamp(timestamp);

      expect(result).to.equal(expectedResult);
    });
  });
});
