/* global it, describe, beforeEach */
import React from 'react';
import { spy } from 'sinon';
import { expect } from 'chai';
import 'jsdom-global/register';
import { shallow, mount } from 'enzyme';
import Immutable from 'immutable';
import InputRadioButton from '../lib/InputRadioButton.js';


describe('<InputRadioButton /> Component', () => {
  const baseProps = {
    name: 'name',
    setValue: () => {},
    getErrorMessage: () => {},
    getValue: () => {},
    displayName: 'displayName',
    options: [
      { name: 'option1', value: 1, displayName: 'opt1' },
      { name: 'option2', value: 2, displayName: 'opt2' },
    ],
  };

  it(' renders input[type="radio"] correctly ', () => {
    let newProps = Immutable.Map(baseProps);
    newProps = newProps.toJS();
    const wrapper = shallow(<InputRadioButton {...newProps} />);
    expect(wrapper.find('input').exists()).to.equal(true);
  });

  it('renders correct number of input tag', () => {
    let newProps = Immutable.Map(baseProps);
    newProps = newProps.toJS();

    const wrapper = shallow(<InputRadioButton {...newProps} />);
    expect(wrapper.find('input')).to.have.length(2);
  });

  it('passes the props correctly to input', () => {
    let newProps = Immutable.Map(baseProps);
    newProps = newProps.set('value', true);
    newProps = newProps.set('fieldClass', 'fieldClass');
    newProps = newProps.set('required', true);
    newProps = newProps.toJS();

    const wrapper = shallow(<InputRadioButton {...newProps} />);
    const inputWrapper = wrapper.find('input').at(0);

    expect(inputWrapper.hasClass('fieldClass')).to.equal(true);
    expect(inputWrapper.props().required).to.equal(true);
  });

  it('passes the props correctly to wrapper div', () => {
    let newProps = Immutable.Map(baseProps);
    newProps = newProps.set('wrapperClass', 'wrapperClass');
    newProps = newProps.toJS();

    const newWrapper = shallow(<InputRadioButton {...newProps} />);
    expect(newWrapper.find('div').at(0).hasClass('wrapperClass')).to.equal(true);
  });

  it('passes the props correctly to the error message div', () => {
    let newProps = Immutable.Map(baseProps);
    newProps = newProps.set('errorClass', 'errorClass');
    newProps = newProps.toJS();

    const newWrapper = shallow(<InputRadioButton {...newProps} />);
    expect(newWrapper.find('div').at(1).hasClass('errorClass')).to.equal(true);
  });

  it('displays the error message inline or block correctly', () => {
    let newProps = Immutable.Map(baseProps);
    newProps = newProps.set('inline', true);
    newProps = newProps.toJS();

    const newWrapper = shallow(<InputRadioButton {...newProps} />);
    expect(newWrapper.find('div').at(1).props().style).to.deep.equal({ display: 'inline-block' });
  });

  it('inline styles for wrapper div works as expected', () => {
    let newProps = Immutable.Map(baseProps);
    newProps = newProps.set('wrapperStyle', {
      display: 'inline-block',
    });
    newProps = newProps.toJS();
    const newWrapper = shallow(<InputRadioButton {...newProps} />);
    expect(newWrapper.find('div').at(0).props().style).to.deep.equal({ display: 'inline-block' });
  });

  it('inline styles for <input /> works as expected', () => {
    let newProps = Immutable.Map(baseProps);
    newProps = newProps.set('fieldStyle', {
      display: 'inline-block',
    });
    newProps = newProps.toJS();

    const newWrapper = shallow(<InputRadioButton{...newProps} />);
    expect(newWrapper.find('input').at(0).props().style).to.deep.equal({ display: 'inline-block' });
  });

  it('inline styles for error <div /> works as expected', () => {
    let newProps = Immutable.Map(baseProps);
    newProps = newProps.set('inline', true);
    newProps = newProps.toJS();

    const newWrapper = shallow(<InputRadioButton {...newProps} />);
    expect(newWrapper.find('div').at(1).props().style).to.deep.equal({ display: 'inline-block' });
  });
});

describe('<InputRadioButton /> Component', () => {
  const baseProps = {
    name: 'name',
    setValue: () => {},
    getErrorMessage: () => {},
    getValue: () => {},
    displayName: 'displayName',
    options: [
      { name: 'option1', value: 1, displayName: 'opt1' },
      { name: 'option2', value: 2, displayName: 'opt2' },
    ],
  };

  it('on recieving new props for value, setState is called ', () => {
    const newProps = Object.assign(baseProps, {
      value: '1',
    });
    const wrapper = mount(<InputRadioButton {...newProps} />);
    const setState = spy(InputRadioButton.prototype, 'setState');
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
    const wrapper = mount(<InputRadioButton {...newProps} />);
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
});
