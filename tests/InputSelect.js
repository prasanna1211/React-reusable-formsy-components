/* global it, describe, beforeEach */
import React from 'react';
import { spy } from 'sinon';
import { expect } from 'chai';
import 'jsdom-global/register';
import { shallow, mount } from 'enzyme';

import InputSelect from '../dist/InputSelectBox.js';

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
      },
    ],
  };

  it('renders everything correctly', () => {
    const wrapper = shallow(<InputSelect {...baseProps} />);
    expect(wrapper.find('select').exists()).to.equal(true);
    expect(wrapper.find('option')).to.have.length(2 + 1);
  });

  it('passes props to wrapper div correctly', () => {
    const newProps = Object.assign(baseProps, {
      wrapperClass: 'wrapperClass',
      wrapperStyle: {
        display: 'inline',
      },
    });
    const wrapper = shallow(<InputSelect {...newProps} />);
    expect(wrapper.find('div').at(0).hasClass('wrapperClass')).to.equal(true);
    expect(wrapper.find('div').at(0).props().style).to.deep.equal({
      display: 'inline',
    });
  });

  it('passes props to select tag correctly', () => {
    const newProps = Object.assign(baseProps, {
      onChangeInput: () => {},
      name: 'default',
      required: true,
      selectClass: 'selectClass',
    });
    const wrapper = shallow(<InputSelect {...newProps} />);
    expect(wrapper.find('select').props().name).to.equal('default');
    expect(wrapper.find('select').props().required).to.equal(true);
    expect(wrapper.find('select').hasClass('selectClass')).to.equal(true);
  });

  it('passes props to option tag correctly', () => {
    const newProps = Object.assign(baseProps, {
      optionClass: 'optionClass',
    });
    const wrapper = shallow(<InputSelect {...newProps} />);
    expect(wrapper.find('option').at(1).hasClass('optionClass')).to.equal(true);
  });

  it('passes props to error message div correctly', () => {
    const newProps = Object.assign(baseProps, {
      errorClass: 'errorClass',
    });
    const wrapper = shallow(<InputSelect {...newProps} />);
    expect(wrapper.find('div').at(1).hasClass('errorClass')).to.equal(true);
  });

  it('displays the error message inline or block correctly', () => {
    const newProps = Object.assign(baseProps, {
      inline: true,
    });
    const wrapper = shallow(<InputSelect {...newProps} />);
    expect(wrapper.find('div').at(1).props().style).to.deep.equal({
      display: 'inline-block',
    });
  });

  it('hides select option defaultText on default and unhides when required', () => {
    const newProps = Object.assign(baseProps, {
      optionClass: 'optionClass',
    });
    const wrapper = shallow(<InputSelect {...newProps} />);
    expect(wrapper.find('option').at(0).props().disabled).to.deep.equal(true);
    wrapper.setProps({
      disableDefaultTextOnSelect: false,
    });
    expect(wrapper.find('option').at(0).props().disabled).to.deep.equal(false);
  });
});

describe('<InputSelect /> component full DOM tests', () => {
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
      },
    ],
  };
  it('on recieving new props for value, setState is called ', () => {
    const newProps = Object.assign(baseProps, {
      value: '1',
    });
    const wrapper = mount(<InputSelect {...newProps} />);
    const setState = spy(InputSelect.prototype, 'setState');
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
    const wrapper = mount(<InputSelect {...newProps} />);
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
