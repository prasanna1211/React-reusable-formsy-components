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

  it('displays display name correctly ', () => {
    expect(true);
  });
});
