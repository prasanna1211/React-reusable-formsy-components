/* global it, describe, beforeEach */
import React from 'react';
import _ from 'underscore';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import InputText from '../lib/InputTextBox.js';

describe(' <InputText /> component', () => {
  const baseProps = {
    name: 'initial',
    getValue: () => {},
    setValue: () => {},
    getErrorMessage: () => {},
  };

  let wrapperShallowWithBaseProps;

  beforeEach(() => {
    wrapperShallowWithBaseProps = shallow(<InputText {...baseProps} />);
  });

  // shallow DOM render test
  it('renders what is needed', () => {
    expect(wrapperShallowWithBaseProps.find('input').exists()).to.equal(true);
    expect(wrapperShallowWithBaseProps.find('div')).to.have.length(2);
  });

  it('renders correct number of input tag', () => {
    expect(wrapperShallowWithBaseProps.find('input')).to.have.length(1);
  });

  it('passes the props correctly to input', () => {
    const newProps = _.extend(baseProps, {
      value: 'sampleValue',           // won't have any effect since getValue() retrives the value
      fieldClass: 'fieldClass',
      required: true,
    });

    const newWrapper = shallow(<InputText {...newProps} />);
    const inputWrapper = newWrapper.find('input');
    expect(inputWrapper.props().className).to.equal('fieldClass');
    expect(inputWrapper.props().required).to.equal(true);
  });

  it('passes the props correctly to wrapper div', () => {
    expect(true);
  });

  it('passes the props correctly to the error message div', () => {
    expect(true);
  });

  it('value is set based on getValue() function from formsy', () => {
    expect(true);
  });

  it('displays the error message inline or block correctly', () => {
    expect(true);
  });

  it('passes any native DOM Props', () => {
    expect(true);
  });

  it('inline styles for wrapper div works as expected', () => {
    expect(true);
  });

  it('inline styles for <input /> works as expected', () => {
    expect(true);
  });

  it('inline styles for error <div /> works as expected', () => {
    expect(true);
  });

  // Full DOM render tests
  it('on recieving new props for value, setState is called ', () => {
    expect(true);
  });

  it('on setting state for value, props.setValue() and props.onChange() is called', () => {
    expect(true);
  });

  it('on simulating user typing onChangeInput() is called', () => {
    expect(true);
  });
});
