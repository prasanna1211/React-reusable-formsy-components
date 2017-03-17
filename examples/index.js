/**
 * Index page of the app.
 * Routes handles the app's routing.
 */
import React from 'react';
import Formsy from 'formsy-react';
import { render } from 'react-dom';
import moment from 'moment';
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
      selectValue: ''
    }
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.selectBoxOptions = [
      { name: "option1", value: "1" },
      { name: "option2", value: "2" }
    ];
    this.radioButtonGroupOptions = [
      { name: "option1", value: "1", displayName: "1" },
      { name: "option2", value: "2", displayName: "2" }
    ];
    this.customSelect = [
      { value: 'one', label: 'One', className: 'select-options-custom' },
      { value: 'two', label: 'Two', className: 'select-options-custom' },
      { value: 'three', label: 'three', className: 'select-options-custom' },
      { value: 'four', label: 'four', className: 'select-options-custom' },
      { value: 'five', label: 'five', className: 'select-options-custom' },
      { value: 'six', label: 'six', className: 'select-options-custom' }
    ];
    this.onChangeSelect = this.onChangeSelect.bind(this);
    this.loadOptions = this.loadOptions.bind(this);
  }

  onChangeInput(value) {
    console.log(' changed value ', value);
  }

  onChangeSelect(value) {

  }

  onReset() {
    this.refs.hello.reset();
    console.log("Resetting the form ", this.refs.hello.getModel());
  }

  onSubmit() {
    console.log('submitting ', this.refs.hello.getModel());
  }

  loadOptions(input, callback) {
    console.log(' load options ', input)
    setTimeout(function() {
        callback(null, {
            options: [
                { value: 'one', label: 'One' },
                { value: 'two', label: 'Two' }
            ],
            // CAREFUL! Only set this to true when there are no more options,
            // or more specific queries will not be sent to the server.
            complete: true
        });
    }, 500);
  }

  render() {
    return (
      <div>
        <Formsy.Form
          ref="hello"
          onChange={this.onChangeForm}
          noValidate
        >
          <InputText
            name="inputText"
            validations="isEmail"
            validationError="Not a valid"
            onChangeInput={this.onChangeInput}
            value=""
          />
          <InputSelect
            name="inputSelect"
            options={this.selectBoxOptions}
            value="2"
            onChangeInput={this.onChangeInput}
          />
          <InputCheck
            name="inputCheck"
            displayName="input check"
            onChangeInput={this.onChangeInput}
          />
          <InputRadioButtonGroup
            name="inputRadio"
            options={this.radioButtonGroupOptions}
            value="2"
            onChangeInput={this.onChangeInput}
          />
          <input
            type="button"
            value="clear"
            onClick={this.onReset}
          />
          <InputSelectCustom
            name="reactselect"
            options = { this.customSelect }
            value = { ['two', 'one'] }
            loadOptions = { this.loadOptions }
            onChangeInput = { this.onChangeSelect }
            className = 'react-select'
            autofocus = {false}
            multi={true}
          />
          <InputDateTime
            name="date"
            value = {
              {
                startDate: '12/11/1990',
                endDate: '12/11/2017',
              }
            }
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
