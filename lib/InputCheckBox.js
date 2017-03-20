/**
 * Input Text Box ( <input type = "text>")
 * Both formsy value and display value will change by changing the state value
 */
import React from 'react';
import _ from 'underscore';
import { pickHTMLProps } from 'pick-react-known-prop';

class InputCheckBox extends React.Component {

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

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(this.state.value, nextState.value);
  }

  // only when there is state change, change formsy and display value to be changed
  componentDidUpdate(prevProps, prevState) { // eslint-disable-line
    if (this.state.value !== prevState.value) {
      this.props.setValue(this.state.value);
      this.props.onChangeInput(this.props.name, this.state.value);
    }
  }

  // On typing, change the state
  onChangeInput() {
    this.setState({
      value: !this.state.value,
    });
  }

  render() {
    // inline or block based on the props
    console.log(' rendered input checkbox ', this.state.value);
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
          type="checkbox"
          ref={this.props.ref}
          className={this.props.fieldClass}
          name={this.props.name}
          checked={this.props.getValue() || false}
          onChange={this.onChangeInput}
          required={this.props.required}
          style={this.props.fieldStyle}
        />
        {this.props.displayName}
        <div className={this.props.errorClass} style={errorMessageStyle}>
          { this.props.getErrorMessage() }
        </div>
      </div>
    );
  }
}

InputCheckBox.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.any,
  wrapperClass: React.PropTypes.string,
  fieldClass: React.PropTypes.string,
  onChangeInput: React.PropTypes.func,
  required: React.PropTypes.bool,
  setValue: React.PropTypes.func.isRequired,
  wrapperStyle: React.PropTypes.object,
  fieldStyle: React.PropTypes.object,
  inline: React.PropTypes.bool,
  getErrorMessage: React.PropTypes.func.isRequired,
  ref: React.PropTypes.string,
  getValue: React.PropTypes.func.isRequired,
  displayName: React.PropTypes.string.isRequired,
  errorClass: React.PropTypes.string,
  label: React.PropTypes.string,
  labelClass: React.PropTypes.string,
};

InputCheckBox.defaultProps = {
  value: false,
  wrapperClass: undefined,
  fieldClass: undefined,
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

export default InputCheckBox;
