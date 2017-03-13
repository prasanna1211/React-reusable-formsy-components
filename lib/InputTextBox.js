import React from 'react';

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
    if(this.state.value != prevState.value) {
      this.props.setValue(this.state.value);
    }
  }

  render() {
    return (
      <div className={this.props.wrapperClass}>
        <input
          type="text"
          className={this.props.fieldClass}
          name={this.props.name}
          value={this.state.value}
          onChange={this.props.onChange}
          required={this.props.required}
        />
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
};

InputTextBox.defaultProps = {
  value: undefined,
  wrapperClass: '',
  fieldClass: '',
  onChange: () => {},
  validations: undefined,
  required: undefined,
};

export default InputTextBox;
