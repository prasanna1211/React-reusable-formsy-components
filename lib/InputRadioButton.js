/**
 * Input Text Box ( <input type = "text>")
 * Both formsy value and display value will change by changing the state value
 */
import React from 'react';
import { pickHTMLProps } from 'pick-react-known-prop';
import _ from 'underscore';

class InputRadioButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };

    this.onChangeInput = this.onChangeInput.bind(this);
    this.renderRadioButtons = this.renderRadioButtons.bind(this);
  }

  // Setting the default value
  componentDidMount() {
    this.props.setValue(this.props.value);
  }

  // When new value is recieved forecefully update the state
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  // only when there is state change, change formsy and display value to be changed
  componentDidUpdate(prevProps, prevState) { // eslint-disable-line
    if (this.state.value !== prevState.value) {
      this.props.setValue(this.state.value);
      this.props.onChangeInput();
    }
  }

  // On typing, change the state
  onChangeInput(value) {
    this.setState({
      value,
    });
  }

  // Renders the radio buttons
  renderRadioButtons(options) {
    const newThis = this;
    const radioButtons = _.map(options, (option) => {
      return (
        <label key={option.name} htmlFor={option.name}>
          <input
            {...pickHTMLProps(newThis.props)}
            type="radio"
            checked={newThis.props.getValue() === option.value}
            ref={newThis.props.ref}
            className={newThis.props.fieldClass}
            name={newThis.props.name}
            onChange={() => { this.onChangeInput(option.value); }}
            required={newThis.props.required}
            style={newThis.props.fieldStyle}
          />
          {option.displayName}
        </label>
      );
    });
    return radioButtons;
  }

  render() {
    // inline or block based on the props
    const errorMessageStyle = this.props.inline ? { display: 'inline-block' } : null;
    return (
      <div
        className={this.props.wrapperClass}
        style={this.props.wrapperStyle}
      >
        {this.renderRadioButtons(this.props.options)}
        <div className="error-message" style={errorMessageStyle}>
          { this.props.getErrorMessage() }
        </div>
      </div>
    );
  }
}

InputRadioButton.propTypes = {
  name: React.PropTypes.string.isRequired,          //eslint-disable-line
  value: React.PropTypes.any,
  options: React.PropTypes.array.isRequired,
  wrapperClass: React.PropTypes.string,
  fieldClass: React.PropTypes.string,               //eslint-disable-line
  onChangeInput: React.PropTypes.func,
  required: React.PropTypes.bool,                   //eslint-disable-line
  setValue: React.PropTypes.func.isRequired,
  wrapperStyle: React.PropTypes.object,
  fieldStyle: React.PropTypes.object,               //eslint-disable-line
  inline: React.PropTypes.bool,
  getErrorMessage: React.PropTypes.func.isRequired,
  ref: React.PropTypes.string,                      //eslint-disable-line
  getValue: React.PropTypes.func.isRequired,        //eslint-disable-line
};

InputRadioButton.defaultProps = {
  value: 'undefined',
  wrapperClass: undefined,
  fieldClass: '',
  onChangeInput: () => {},
  validations: undefined,
  required: undefined,
  wrapperStyle: undefined,
  fieldStyle: undefined,
  inline: undefined,
  validationError: undefined,
  ref: '',
};

export default InputRadioButton;