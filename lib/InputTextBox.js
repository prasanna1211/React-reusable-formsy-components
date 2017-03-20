/**
 * Input Text Box ( <input type = "text>")
 * Both formsy value and display value will change by changing the state value
 */
import React from 'react';
import { pickHTMLProps } from 'pick-react-known-prop';

class InputTextBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };

    this.onChangeInput = this.onChangeInput.bind(this);
  }

  // Setting the default value
  componentDidMount() {
    this.props.setValue(this.props.value);
  }

  // When new value is recieved forecefully update the state
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value || nextProps.isValuePristine) { // eslint-disable-line
      this.setState({
        value: nextProps.value,
      });
    }
  }

  // only when there is state change, change formsy and display value to be changed
  componentDidUpdate(prevProps, prevState) { // eslint-disable-line
    if (this.state.value !== prevState.value) {
      this.props.setValue(this.state.value);
      this.props.onChangeInput(this.props.name, this.state.value);
    }
  }

  // On typing, change the state
  onChangeInput(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    // inline or block based on the props
    const errorMessageStyle = this.props.inline ? { display: 'inline-block' } : null;
    return (
      <div
        className={this.props.wrapperClass}
        style={this.props.wrapperStyle}
      >
        <label
          htmlFor={this.props.name}
          className={this.props.labelClass}
        >
          {this.props.label}
        </label>
        <input
          {...pickHTMLProps(this.props)}
          type="text"
          ref={this.props.ref}
          className={this.props.fieldClass}
          name={this.props.name}
          value={this.props.getValue()}
          onChange={this.onChangeInput}
          required={this.props.required}
          style={this.props.fieldStyle}
        />
        <div className={this.props.errorClass} style={errorMessageStyle}>
          { this.props.getErrorMessage() }
        </div>
      </div>
    );
  }
}

InputTextBox.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.any,
  wrapperClass: React.PropTypes.string,
  fieldClass: React.PropTypes.string,
  errorClass: React.PropTypes.string,
  onChangeInput: React.PropTypes.func,
  required: React.PropTypes.bool,
  setValue: React.PropTypes.func.isRequired,
  wrapperStyle: React.PropTypes.object,
  fieldStyle: React.PropTypes.object,
  inline: React.PropTypes.bool,
  getErrorMessage: React.PropTypes.func.isRequired,
  ref: React.PropTypes.string,
  getValue: React.PropTypes.func.isRequired,
  label: React.PropTypes.string,
  labelClass: React.PropTypes.string,
};

InputTextBox.defaultProps = {
  value: undefined,
  wrapperClass: '',
  fieldClass: '',
  onChangeInput: () => {},
  validations: undefined,
  required: undefined,
  wrapperStyle: undefined,
  fieldStyle: undefined,
  inline: undefined,
  validationError: undefined,
  ref: '',
  errorClass: undefined,
  label: undefined,
  labelClass: undefined,
};

export default InputTextBox;

