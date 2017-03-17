/* global it, describe, beforeEach */
import React from 'react';
import { spy } from 'sinon';
import { expect } from 'chai';
import 'jsdom-global/register';
import { mount } from 'enzyme';
import Immutable from 'immutable';
import InputSelectCustom from '../lib/InputSelectCustom.js';

/**
 * Tests only include interaction between formsy and react-select.
 * Tests for react-select will be already written for it in their package.
 */
describe(' <InputSelectCustom /> Component ', () => {
  const baseProps = {
    name: 'initial',
    getValue: () => {},
    setValue: () => {},
    getErrorMessage: () => {},
    options: [
      {
        label: 'option1',
        value: '1',
      },
      {
        label: 'option2',
        value: '2',
      },
    ],
  };
  it('on recieving new props for value, setState is called ', () => {
    const newProps = Object.assign(baseProps, {
      value: '1',
    });
    const wrapper = mount(<InputSelectCustom {...newProps} />);
    const setState = spy(InputSelectCustom.prototype, 'setState');
    wrapper.setProps({
      value: '2',
    });
    expect(setState.calledOnce).to.equal(true);
    wrapper.setProps({
      value: '3',
    });
    expect(setState.calledTwice).to.equal(true);
  });

  it('on setting state for value, props.setValue() and props.onChange() is called', () => {
    const newProps = Object.assign(baseProps, {
      setValue: spy(),
      onChangeInput: spy(),
    });
    const wrapper = mount(<InputSelectCustom {...newProps} />);
    wrapper.setState({
      value: '2',
    });
    expect(newProps.setValue.calledTwice).to.equal(true);
    expect(newProps.onChangeInput.calledOnce).to.equal(true);
    wrapper.setState({
      value: '3',
    });
    expect(newProps.setValue.calledThrice).to.equal(true);
    expect(newProps.onChangeInput.calledTwice).to.equal(true);
  });

  it('called value for props.setValue() and props.onChange() is correct', () => {
    const newProps = Object.assign(baseProps, {
      setValue: spy(),
      onChangeInput: spy(),
    });
    const wrapper = mount(<InputSelectCustom {...newProps} />);
    wrapper.setState({
      value: '2',
    });
    expect(newProps.setValue.calledWith('2')).to.equal(true);
    expect(newProps.onChangeInput.calledWith('2')).to.equal(true);
  });

  it('Internal state propogation is correct for mult={true}', () => {
    let newProps = Immutable.Map(baseProps);
    newProps = newProps.set('value', [1, 2]).toJS();
    const wrapper = mount(<InputSelectCustom {...newProps} />);
    wrapper.setState({
      value: [3, 4],
    });
    expect(newProps.setValue.calledWith([3, 4])).to.equal(true);
    expect(newProps.onChangeInput.calledWith([3, 4])).to.equal(true);
  });
});
