/* global it, describe */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import InputText from '../lib/InputTextBox.js';

describe(' <InputText /> component', () => {

  const baseProps = {
    getValue: () => {},
    setValue: () => {},
    getErrorMessage: () => {},
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<InputText {...props}/>)
  });
  it(' renders an input ', () => {
    expect(true);
  });
});
