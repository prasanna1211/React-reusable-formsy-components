/**
 * Input Text Box ( <input type = "text>")
 * Both formsy value and display value will change by changing the state value
 */
import React from 'react';
import { pickHTMLProps } from 'pick-react-known-prop';
import _ from 'underscore';

class InputSelectBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: props.value || props.defaultNoneDisplay || 'selectOption',
    };

    this.onChangeSelect = this.onChangeSelect.bind(this);
  }

  // Setting the default value
  componentDidMount() {
    this.props.setValue(this.props.value || this.props.defaultNoneDisplay || 'selectOption');
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
          ref={this.props.ref}
          name={this.props.name}
          value={this.props.getValue()}
          onChange={this.onChangeSelect}
          required={this.props.required}
        >
          <option key="selectOption" value="selectOption" disabled={this.props.disableDefaultTextOnSelect}>Select An Option</option>
          {
            _.map(this.props.options, optionData => (
              <option key={optionData.value} value={optionData.value}>
                {optionData.name}
              </option>
            ))
          }
        </select>
        <div className="error-message" style={errorMessageStyle}>
          { this.props.getErrorMessage() }
        </div>
      </div>
    );
  }
}

InputSelectBox.propTypes = {
  options: React.PropTypes.array.isRequired,
  wrapperClass: React.PropTypes.string,
  wrapperStyle: React.PropTypes.string,
  getErrorMessage: React.PropTypes.func.isRequired,
  getValue: React.PropTypes.func.isRequired,
  defaultNoneDisplay: React.PropTypes.any,
  value: React.PropTypes.any,
  setValue: React.PropTypes.func.isRequired,
  onChangeInput: React.PropTypes.func,
  inline: React.PropTypes.bool,
  ref: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  required: React.PropTypes.bool,
  disableDefaultTextOnSelect: React.PropTypes.bool,
};

InputSelectBox.defaultProps = {
  wrapperClass: undefined,
  wrapperStyle: undefined,
  defaultNoneDisplay: undefined,
  value: 'selectOption',
  onChangeInput: () => {},
  inline: undefined,
  ref: undefined,
  disableDefaultTextOnSelect: undefined,
  required: undefined,
};

export default InputSelectBox;
