import React from 'react';
import { pickHTMLProps } from 'pick-react-known-prop';

class InputTextBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  shouldComponentUpdate(nextProps, nextState) { // eslint-disable-line
    if (this.props.value !== nextProps.value || this.props.fieldClass !== nextProps.fieldClass || this.props.wrapperClass !== nextProps.wrapperClass) {
      return true;
    }
    return false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) { // eslint-disable-line
    if (this.state.value !== prevState.value) {
      this.props.setValue(this.state.value);
    }
  }

  render() {
    const errorMessageStyle = this.props.inline ? { display: 'inline-block' } : null;
    return (
      <div className={this.props.wrapperClass} style={this.props.wrapperStyle}>
        <input
          type="text"
          className={this.props.fieldClass}
          name={this.props.name}
          value={this.state.value}
          onChange={this.props.onChange}
          required={this.props.required}
          style={this.props.fieldStyle}
          {...pickHTMLProps(this.props)}
        />
        <div className="error-message" style={errorMessageStyle}>
          Its an error
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
  onChange: React.PropTypes.func,
  required: React.PropTypes.bool,
  setValue: React.PropTypes.func.isRequired,
  wrapperStyle: React.PropTypes.object,
  fieldStyle: React.PropTypes.object,
  inline: React.PropTypes.bool,
};

InputTextBox.defaultProps = {
  value: undefined,
  wrapperClass: '',
  fieldClass: '',
  onChange: () => {},
  validations: undefined,
  required: undefined,
  wrapperStyle: undefined,
  fieldStyle: undefined,
  inline: undefined,
};

export default InputTextBox;
