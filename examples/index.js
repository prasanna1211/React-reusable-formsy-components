/**
 * Index page of the app.
 * Routes handles the app's routing.
 */
import React from 'react';
import Formsy from 'formsy-react';
import { render } from 'react-dom';
import moment from 'moment';
import _ from 'underscore';
import {
  InputText,
  InputSelect,
  InputCheck,
  InputRadioButtonGroup,
  InputSelectCustom,
  InputDateTime } from '../lib/main.js';
import './style.scss';
import './bootstrap.css';
import './dateRangePicker.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      canSubmit: true,
      selectValue: '',
      isSettingPristineValue: {},
    };

    // Hold the form names. Used to construct a state object with true.
    this.formName = [1, 2, 3, 4, 5, 6];
    // On changing input. used as callback for altering {this.state.isSettingPristineValue}
    this.onChangeInput = this.onChangeInput.bind(this);
    // Custom reset function. Resets the pristine values
    this.onReset = this.onReset.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // Static options
    this.selectBoxOptions = [
      { name: "option1", value: "1" },
      { name: "option2", value: "2" }
    ];
    this.radioButtonGroupOptions = [
      { name: "option1", value: "1", displayName: "1" },
      { name: "option2", value: "2", displayName: "2" }
    ];
    this.customSelect = [
      { value: 'one', label: 'one', className: 'select-options-custom' },
      { value: 'two', label: 'two', className: 'select-options-custom' },
      { value: 'three', label: 'three', className: 'select-options-custom' },
      { value: 'four', label: 'four', className: 'select-options-custom' },
      { value: 'five', label: 'five', className: 'select-options-custom' },
      { value: 'six', label: 'six', className: 'select-options-custom' }
    ];
  }

  componentDidMount() {
    // Set all key value pair to have true for all form fields with name.
    let isSettingPristineValue = {};
    _.each((this.formName), (name) => {
      isSettingPristineValue[name] = true;
    });
    // This will store every input as untouched
    this.setState({
      isSettingPristineValue
    });
  }

  onChangeInput(name, value) {
    // If any of the form input change and if it is not the original value
    if(!_.isEqual(this.refs.hello.getPristineValues()[name], value)) {
      let isSettingPristineValue = JSON.parse(JSON.stringify(this.state.isSettingPristineValue));
      isSettingPristineValue[name] = false;
      this.setState({
        isSettingPristineValue,
      });
    }
  }

  onReset() {
    let isSettingPristineValue = {};
    _.each((this.formName), (name) => {
      isSettingPristineValue[name] = true;
    });
    this.setState({
      isSettingPristineValue,
    });
  }

  onSubmit() {
    console.log('submitting ', this.refs.hello.getModel());
  }

  render() {
    const dateTime = {
      startDate: '25/12/2017 12:00:00 am',
      endDate: '25/12/2018 12:00:01 am',
    };

    return (
      <div>
        <Formsy.Form
          ref="hello"
          onChange={this.onChangeForm}
          noValidate
        >
          <InputText
            name="1"
            validations="isEmail"
            validationError="Not a valid"
            onChangeInput={this.onChangeInput}
            wrapperClass="divs"
            value='abcdef'
            isValuePristine={this.state.isSettingPristineValue[1]}
          />
          <InputSelect
            name="2"
            options={this.selectBoxOptions}
            value="2"
            onChangeInput={this.onChangeInput}
            isValuePristine={this.state.isSettingPristineValue[2]}
            value={'2'}
            wrapperClass="divs"
          />
          <InputCheck
            name="3"
            displayName="input check"
            onChangeInput={this.onChangeInput}
            isValuePristine={this.state.isSettingPristineValue[3]}
            value={true}
            wrapperClass="divs"
          />
          <InputRadioButtonGroup
            name="4"
            options={this.radioButtonGroupOptions}
            onChangeInput={this.onChangeInput}
            wrapperClass="divs"
            isValuePristine={this.state.isSettingPristineValue[4]}
            value={'2'}
          />
          <input
            type="button"
            value="clear"
            onClick={this.onReset}
          />
          <InputSelectCustom
            name="5"
            options = { this.customSelect }
            onChangeInput = { this.onChangeInput }
            className = 'react-select'
            autofocus = {false}
            multi={true}
            wrapperClass="divs"
            isValuePristine={this.state.isSettingPristineValue[5]}
            value={['two', 'three']}
          />
          <InputDateTime
            name="6"
            timePicker={true}
            wrapperClass="divs"
            onChangeInput = { this.onChangeInput }
            isValuePristine={this.state.isSettingPristineValue[6]}
            value={dateTime}
          >
          </InputDateTime>
          <button
            type="submit"
            disabled={!this.state.canSubmit}
            onClick={this.onSubmit}
          >
            Submit
          </button>
        </Formsy.Form>
      </div>
    );
  }
}
/*
 * Renders the app with the target container
 */
render(
  <App />,
  document.getElementById('app'));
