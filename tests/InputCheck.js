/* global it, describe, beforeEach */
import React from 'react';
import { spy } from 'sinon';
import { expect } from 'chai';
import 'jsdom-global/register';
import { shallow, mount } from 'enzyme';
import InputCheck from '../lib/InputCheckBox.js';

describe(' <InputCheckBox /> component shallow Tests ', () => {
  const baseProps = {
    name: 'name',
    setValue: () => {},
    getErrorMessage: () => {},
    getValue: () => {},
    displayName: 'displayName',
  };

  it(' renders input[type="check"] correctly ', () => {
    const wrapper = shallow(<InputCheck {...baseProps} />);
    expect(wrapper.find('input').exists()).to.equal(true);
  });

  it('renders correct number of input tag', () => {
    const wrapper = shallow(<InputCheck {...baseProps} />);
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('passes the props correctly to input', () => {
    const newProps = Object.assign(baseProps, {
      value: true,
      fieldClass: 'fieldClass',
      required: true,
    });

    const newWrapper = shallow(<InputCheck {...newProps} />);
    const inputWrapper = newWrapper.find('input');
    expect(inputWrapper.props().className).to.equal('fieldClass');
    expect(inputWrapper.props().required).to.equal(true);
  });

  it('passes the props correctly to wrapper div', () => {
    const newProps = Object.assign(baseProps, {
      wrapperClass: 'wrapperClass',
    });
    const newWrapper = shallow(<InputCheck {...newProps} />);
    expect(newWrapper.find('div').at(0).hasClass('wrapperClass')).to.equal(true);
  });

  it('passes the props correctly to the error message div', () => {
    const newProps = Object.assign(baseProps, {
      errorClass: 'errorClass',
    });
    const newWrapper = shallow(<InputCheck {...newProps} />);
    expect(newWrapper.find('div').at(1).hasClass('errorClass')).to.equal(true);
  });

  it('displays the error message inline or block correctly', () => {
    const newProps = Object.assign(baseProps, {
      inline: true,
    });
    const newWrapper = shallow(<InputCheck {...newProps} />);
    expect(newWrapper.find('div').at(1).props().style).to.deep.equal({ display: 'inline-block' });
  });

  it('inline styles for wrapper div works as expected', () => {
    const newProps = Object.assign(baseProps, {
      wrapperStyle: { display: 'inline-block' },
    });
    const newWrapper = shallow(<InputCheck {...newProps} />);
    expect(newWrapper.find('div').at(0).props().style).to.deep.equal({ display: 'inline-block' });
  });

  it('inline styles for <input /> works as expected', () => {
    const newProps = Object.assign(baseProps, {
      fieldStyle: { display: 'inline-block' },
    });
    const newWrapper = shallow(<InputCheck {...newProps} />);
    expect(newWrapper.find('input').at(0).props().style).to.deep.equal({ display: 'inline-block' });
  });

  it('inline styles for error <div /> works as expected', () => {
    const newProps = Object.assign(baseProps, {
      wrapperStyle: { display: 'inline-block' },
    });
    const newWrapper = shallow(<InputCheck {...newProps} />);
    expect(newWrapper.find('div').at(1).props().style).to.deep.equal({ display: 'inline-block' });
  });
});

describe(' <InputCheckBox /> component full DOM Tests ', () => {
  const baseProps = {
    name: 'initial',
    getValue: () => {},
    setValue: () => {},
    getErrorMessage: () => {},
  };

  it('on recieving new props for value, setState is called ', () => {
    const newProps = Object.assign(baseProps, {
      value: '1',
    });
    const wrapper = mount(<InputCheck {...newProps} />);
    const setState = spy(InputCheck.prototype, 'setState');
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
    const wrapper = mount(<InputCheck {...newProps} />);
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
