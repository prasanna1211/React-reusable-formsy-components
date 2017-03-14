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
      passThroughValue: 'not changed',
      canSubmit: false,
    };
    this.cbOptions=[
      { name: 'option1', value: '1', displayName: 'option1'},
      { name: 'option2', value: '2@gmail.com', displayName: 'option2'},
      { name: 'option3', value: '3', displayName: 'option3'},
    ]
    this.onChangeInput = this.onChangeInput.bind(this);
    this.ontest = this.ontest.bind(this);
  }

  componentDidMount() {
    if (this.refs.hello.getModel().select1 != 'selectOption') {
      this.setState({
        canSubmit: true,
      });
    }
  }

  onChangeInput() {

  }

  ontest() {
    console.log('form values ', this.refs.hello.getModel());
    console.log(' form values ', this.refs.hello.reset());
  }

  render() {
    return (
      <div>
        <Formsy.Form
          ref="hello"
          onChange={this.onChangeForm}
          noValidate
        >
          <InputRadioButtonGroup
            name="radio1"
            options={this.cbOptions}
          />
          <button
            disabled={!this.state.canSubmit}
            onClick={this.ontest}
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
