/* global it, describe, beforeEach */
import React from 'react';
import _ from 'underscore';
import { spy } from 'sinon';
import { expect } from 'chai';
import 'jsdom-global/register';
import { shallow, mount } from 'enzyme';
import InputText from '../lib/InputTextBox.js';

describe(' <InputText /> component shallow Tests', () => {
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
    const newProps = _.extend(baseProps, {
      wrapperClass: 'wrapperClass',
    });
    const newWrapper = shallow(<InputText {...newProps} />);
    expect(newWrapper.find('div').at(0).hasClass('wrapperClass')).to.equal(true);
  });

  it('passes the props correctly to the error message div', () => {
    const newProps = _.extend(baseProps, {
      errorClass: 'errorClass',
    });
    const newWrapper = shallow(<InputText {...newProps} />);
    expect(newWrapper.find('div').at(1).hasClass('errorClass')).to.equal(true);
  });

  it('displays the error message inline or block correctly', () => {
    const newProps = _.extend(baseProps, {
      inline: true,
    });
    const newWrapper = shallow(<InputText {...newProps} />);
    expect(newWrapper.find('div').at(1).props().style).to.deep.equal({ display: 'inline-block' });
  });

  it('passes any native DOM Props', () => {
    // todo
    expect(true);
  });

  it('inline styles for wrapper div works as expected', () => {
    const newProps = _.extend(baseProps, {
      wrapperStyle: { display: 'inline-block' },
    });
    const newWrapper = shallow(<InputText {...newProps} />);
    expect(newWrapper.find('div').at(0).props().style).to.deep.equal({ display: 'inline-block' });
  });

  it('inline styles for <input /> works as expected', () => {
    const newProps = _.extend(baseProps, {
      fieldStyle: { display: 'inline-block' },
    });
    const newWrapper = shallow(<InputText {...newProps} />);
    expect(newWrapper.find('input').at(0).props().style).to.deep.equal({ display: 'inline-block' });
  });

  it('inline styles for error <div /> works as expected', () => {
    const newProps = _.extend(baseProps, {
      wrapperStyle: { display: 'inline-block' },
    });
    const newWrapper = shallow(<InputText {...newProps} />);
    expect(newWrapper.find('div').at(1).props().style).to.deep.equal({ display: 'inline-block' });
  });
});

describe('<InputText /> Component Full DOM tests', () => {
  const baseProps = {
    name: 'initial',
    getValue: () => {},
    setValue: () => {},
    getErrorMessage: () => {},
  };

  it('on recieving new props for value, setState is called ', () => {
    const newProps = _.extend(baseProps, {
      value: '1',
    });
    const wrapper = mount(<InputText {...newProps} />);
    const setState = spy(InputText.prototype, 'setState');
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
    const newProps = Object.assign({
      name: 'initial',
      getValue: () => {},
      getErrorMessage: () => {},
      setValue: spy(),
      onChangeInput: spy(),
    });
    const wrapper = mount(<InputText {...newProps} />);
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

