import React from 'react';
import Select from 'react-select';
import _ from 'underscore';
import 'react-select/dist/react-select.css';

class InputSelectCustom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }

    this.onChangeInput = this.onChangeInput.bind(this);
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
  }

  // On typing, change the state
  onChangeInput(selectedGroup) {
    let activeValue;
    if(_.isArray(selectedGroup)) {
      activeValue = _.map(selectedGroup, (option) => {
        return option.value;
      });
    }
    else {
      activeValue = selectedGroup.value;
    }
    this.setState({
      value: activeValue,
    });
  }

  render() {
    return (
      <div>
        <Select
          {...this.props}
          onChange={this.onChangeInput}
          value={this.props.getValue()}
        />
      </div>
    );
  }
}

export default InputSelectCustom;
