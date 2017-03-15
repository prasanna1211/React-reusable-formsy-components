/* global it, describe, beforeEach */
import React from 'react';
import { spy } from 'sinon';
import { expect } from 'chai';
import 'jsdom-global/register';
import { shallow, mount } from 'enzyme';

import InputSelect from '../lib/InputSelectBox.js';

describe('<InputSelect /> component shallow tests', () => {
  const baseProps = {
    name: 'initial',
    getValue: () => {},
    setValue: () => {},
    getErrorMessage: () => {},
    options: [
      {
        name: 'option1',
        value: '1',
      },
      {
        name: 'option2',
        value: '2',
      }
    ],
  };

  it('renders everything correctly', () => {
    const wrapper = shallow(<InputSelect {...baseProps}/>);
    console.log(' wrapper ', wrapper.debug());
    expect(wrapper.find('select').exists()).to.equal(true);
    expect(wrapper.find('option')).to.have.length(2+1);
  });
});
