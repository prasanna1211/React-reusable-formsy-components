/**
 * Index page of the app.
 * Routes handles the app's routing.
 */
import React from 'react';
import Formsy from 'formsy-react';
import { render } from 'react-dom';
import { InputText, InputSelect, InputCheck, InputRadioButtonGroup } from '../lib/main.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      canSubmit: true,
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
  }

  onChangeInput() {

  }

  onReset() {
    this.refs.hello.reset('resetting ', this.refs.hello.reset());
    console.log("Resetting the form ", this.refs.hello.getModel());
  }

  onSubmit() {
    console.log('submitting ', this.refs.hello.getModel());
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
          />
          <InputSelect
            name="inputSelect"
            options={this.selectBoxOptions}
            value="2"
          />
          <InputCheck
            name="inputCheck"
            displayName="input check"
          />
          <InputRadioButtonGroup
            name="inputRadio"
            options={this.radioButtonGroupOptions}
            value="2"
          />
          <input
            type="button"
            value="clear"
            onClick={this.onReset}
          />
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
