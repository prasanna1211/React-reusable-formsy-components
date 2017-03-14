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

  }

  // Setting the default value
  componentDidMount() {
    //this.props.setValue(this.props.value);
  }

  // When new value is recieved forecefully update the state
  componentWillReceiveProps(nextProps) {
    // if (nextProps.value !== this.props.value) {
    //   this.setState({
    //     value: nextProps.value,
    //   });
    // }
  }

  // only when there is state change, change formsy and display value to be changed
  componentDidUpdate(prevProps, prevState) { // eslint-disable-line
    // if (this.state.value !== prevState.value) {
    //   this.props.setValue(this.state.value);
    //   this.props.onChangeInput();
    // }
  }

  // On typing, change the state
  onChangeInput(event) {
    // this.setState({
    //   value: event.target.value,
    // });
  }

  render() {
    // inline or block based on the props
    const errorMessageStyle = this.props.inline ? { display: 'inline-block' } : null;
    return (
      <div
        className={this.props.wrapperClass}
        style={this.props.wrapperStyle}
      >
        <select>
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
};

InputSelectBox.defaultProps = {

};

export default InputSelectBox;
