import React from 'react';
import Select from 'react-select';
import _ from 'underscore';
import 'react-select/dist/react-select.css';

class InputSelectCustom extends React.Component {
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
    if (!_.isEqual(nextProps.value, this.props.value) || nextProps.isValuePristine) { // eslint-disable-line
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
  onChangeInput(selectedGroup) {
    let activeValue;
    if (_.isArray(selectedGroup)) {
      activeValue = _.map(selectedGroup, (option) => {
        return option.value;
      });
    } else {
      activeValue = selectedGroup.value;
    }
    this.setState({
      value: activeValue,
    });
  }

  render() {
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
        <Select
          {...this.props}
          onChange={this.onChangeInput}
          value={this.props.getValue()}
          className={this.props.selectClass}
        />
        <div className={this.props.errorClass} style={errorMessageStyle}>
          { this.props.getErrorMessage() }
        </div>
      </div>
    );
  }
}

InputSelectCustom.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.any,
  onChangeInput: React.PropTypes.func,
  setValue: React.PropTypes.func.isRequired,
  getValue: React.PropTypes.func.isRequired,
  wrapperClass: React.PropTypes.string,
  wrapperStyle: React.PropTypes.object,
  inline: React.PropTypes.bool,
  getErrorMessage: React.PropTypes.func.isRequired,
  errorClass: React.PropTypes.string,
  label: React.PropTypes.string,
  labelClass: React.PropTypes.string,
  selectClass: React.PropTypes.string,
};

InputSelectCustom.defaultProps = {
  value: undefined,
  onChangeInput: () => {},
  selectClass: undefined,
  wrapperClass: undefined,
  wrapperStyle: undefined,
  inline: undefined,
  errorClass: undefined,
  label: undefined,
  labelClass: undefined,
};

export default InputSelectCustom;
