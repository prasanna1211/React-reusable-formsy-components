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
    const wrapper = shallow(<InputSelect {...baseProps} />);
    expect(wrapper.find('select').exists()).to.equal(true);
    expect(wrapper.find('option')).to.have.length(2+1);
  });

  it('passes props to wrapper div correctly', () => {
    const newProps = Object.assign(baseProps, {
      wrapperClass: React.PropTypes.string,
      wrapperStyle: React.PropTypes.string,
    });
    const wrapper = shallow(<InputSelect {...baseProps} />);

    expect(true);
  });

  it('passes props to select tag correctly', () => {
    const newProps = Object.assign(baseProps, {
      onChangeInput: React.PropTypes.func,
      name: React.PropTypes.string.isRequired,
      required: React.PropTypes.bool,
      selectClass: React.PropTypes.string,
    });
    const wrapper = shallow(<InputSelect {...baseProps} />);
    expect(true);
  });

  it('passes props to option tag correctly', () => {
    const newProps = Object.assign(baseProps, {
      value: React.PropTypes.any,
      optionClass: React.PropTypes.string,
    });
    const wrapper = shallow(<InputSelect {...baseProps} />);

    expect(true);
  });

  it('passes props to error message div correctly', () => {
    const newProps = Object.assign(baseProps, {
      errorClass: React.PropTypes.string,
      inline: React.PropTypes.bool,
    });
    const wrapper = shallow(<InputSelect {...baseProps} />);

    expect(true);
  });

  it('displays the error message inline or block correctly', () => {
    const newProps = Object.assign(baseProps, {
      errorClass: React.PropTypes.string,
      inline: React.PropTypes.bool,
    });
    const wrapper = shallow(<InputSelect {...baseProps} />);

    expect(true);
  });

});

describe('<InputSelect /> component full DOM tests', () => {
  it('on recieving new props for value, setState is called ', () => {
    expect(true);
  });

  it('on setting state for value, props.setValue() and props.onChange() is called', () => {
    expect(true);
  });

  it('on selecting a new item ', () => {
    expect(true);
  });
});
