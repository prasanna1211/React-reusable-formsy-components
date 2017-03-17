/**
 * Input Select Box ( <select></select>")
 * Both formsy value and display value will change by changing the state value
 */
import React from 'react';
import { pickHTMLProps } from 'pick-react-known-prop';
import _ from 'underscore';

class InputSelectBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };

    this.onChangeSelect = this.onChangeSelect.bind(this);
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
      this.props.onChangeInput(this.state.value);
    }
    if(prevState.value != this.props.getValue()) {

    }
    console.log(' helloooo ', prevState.value, this.props.getValue());
  }

  // On changing sleect, change the state
  onChangeSelect(event) {
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
        <select
          {...pickHTMLProps(this.props)}
          className={this.props.selectClass}
          ref={this.props.ref}
          name={this.props.name}
          value={this.props.getValue()}
          onChange={this.onChangeSelect}
          required={this.props.required}
        >
          <option
            key="selectOption"
            value="none"
            disabled={this.props.disableDefaultTextOnSelect}
          >
            {this.props.defaultText}
          </option>
          {
            _.map(this.props.options, optionData => (
              <option
                key={optionData.value}
                value={optionData.value}
                className={this.props.optionClass}
              >
                {optionData.name}
              </option>
            ))
          }
        </select>
        <div className={this.props.errorClass} style={errorMessageStyle}>
          { this.props.getErrorMessage() }
        </div>
      </div>
    );
  }
}

InputSelectBox.propTypes = {
  options: React.PropTypes.array.isRequired,
  wrapperClass: React.PropTypes.string,
  errorClass: React.PropTypes.string,
  wrapperStyle: React.PropTypes.object,
  getErrorMessage: React.PropTypes.func.isRequired,
  getValue: React.PropTypes.func.isRequired,
  value: React.PropTypes.any,
  setValue: React.PropTypes.func.isRequired,
  onChangeInput: React.PropTypes.func,
  inline: React.PropTypes.bool,
  ref: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  required: React.PropTypes.bool,
  disableDefaultTextOnSelect: React.PropTypes.bool,
  defaultText: React.PropTypes.string,
  selectClass: React.PropTypes.string,
  optionClass: React.PropTypes.string,
};

InputSelectBox.defaultProps = {
  wrapperClass: undefined,
  wrapperStyle: undefined,
  errorClass: undefined,
  value: 'selectOption',
  onChangeInput: () => {},
  inline: undefined,
  ref: undefined,
  disableDefaultTextOnSelect: true,
  required: undefined,
  defaultText: 'Select An Option',
  selectClass: '',
  optionClass: '',
};

export default InputSelectBox;
