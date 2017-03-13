/**
 * Index page of the app.
 * Routes handles the app's routing.
 */
import React from 'react';
import Formsy from 'formsy-react';
import { render } from 'react-dom';
import { InputTextBox } from '../../index.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      passThroughValue: 'not changed',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.setState({
      passThroughValue: 'changed',
    });
  }

  render() {
    return (
      <div>
        <Formsy.Form>
          <InputTextBox
            name="default"
            value={this.state.passThroughValue}
            wrapperClass="parent-class"
            fieldClass="child-class"
            onChange={this.onChange}
            onMouseEnter={this.onChange}
            wrapperStyle={this.wrapperStyle}
            fieldStyle={this.fieldStyle}
            inline
          />
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
