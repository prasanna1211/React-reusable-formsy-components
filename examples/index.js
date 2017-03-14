/**
 * Index page of the app.
 * Routes handles the app's routing.
 */
import React from 'react';
import Formsy from 'formsy-react';
import { render } from 'react-dom';
import { InputTextbox } from '../dist/main.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      passThroughValue: 'not changed',
      canSubmit: false,
    };
    this.onChangeInput = this.onChangeInput.bind(this);
    this.ontest = this.ontest.bind(this);
  }

  onChangeInput() {
    setTimeout(() => {
      console.log(' reached calback ', this.nameRef.getValue());
    }, 50);
  }

  ontest() {
    console.log(' resettubg form ');
    this.refs.hello.reset();
  }

  render() {
    return (
      <div>
        <Formsy.Form
          ref="hello"
        >
          <InputTextbox
            name="name"
            defaultValue="uuu"
            ref={(c) => { this.nameRef = c; }}
            value="aio"
            wrapperClass="parent-class"
            fieldClass="child-class"
            onChangeInput={this.onChangeInput}
            wrapperStyle={this.wrapperStyle}
            fieldStyle={this.fieldStyle}
            validations="isEmail"
            validationError="Not a valid email"
            required
            inline
          />
          ohooooo
          <button onClick={this.ontest}>Submit</button>
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
