/**
 * Input Date Range Picker
 */
import React from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment';
import { pickHTMLProps } from 'pick-react-known-prop';

class InputDateTime extends React.Component {
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
  onChangeInput(event, picker) {
    this.setState({
      value: {
        startDate: picker.startDate.toString(),
        endDate: picker.endDate.toString(),
      },
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
        >
          <DateRangePicker
            startDate={ moment(this.props.getValue().startDate) }
            endDate={ moment(this.props.getValue().endDate) }
            alwaysShowCalendars={this.props.alwaysShowCalendars}
            applyClass={this.props.applyClass}
            autoApply={this.props.autoApply}
            autoUpdateInput={this.props.autoUpdateInput}
            buttonClasses={this.props.buttonClasses}
            cancelClass={this.props.cancelClass}
            dateLimit={this.props.dateLimit}
            drops={this.props.drops}
            isCustomDate={this.props.isCustomDate}
            isInvalidDate={this.props.isInvalidDate}
            linkedCalendars={this.props.linkedCalendars}
            locale={this.props.locale}
            maxDate={this.props.maxDate}
            minDate={this.props.minDate}
            opens={this.props.opens}
            parentEl={this.props.parentEl}
            ranges={this.props.ranges}
            showCustomRangeLabel={this.props.showCustomRangeLabel}
            showDropdowns={this.props.showDropdowns}
            showISOWeekNumbers={this.props.showISOWeekNumbers}
            showWeekNumbers={this.props.showWeekNumbers}
            singleDatePicker={this.props.singleDatePicker}
            template={this.props.template}
            timePicker={this.props.timePicker}
            timePicker24Hour={this.props.timePicker24Hour}
            timePickerIncrement={this.props.timePickerIncrement}
            timePickerSeconds={this.props.timePickerSeconds}
            onEvent={this.onChangeInput}
          >
            {this.props.children}
          </DateRangePicker>
          {this.props.displayName}
        </label>
        <div className={this.props.errorClass} style={errorMessageStyle}>
          { this.props.getErrorMessage() }
        </div>
      </div>
    );
  }
}

InputDateTime.propTypes = {
  alwaysShowCalendars: React.PropTypes.any,
  applyClass: React.PropTypes.any,
  autoApply: React.PropTypes.any,
  autoUpdateInput: React.PropTypes.any,
  buttonClasses: React.PropTypes.any,
  cancelClass: React.PropTypes.any,
  dateLimit: React.PropTypes.any,
  drops: React.PropTypes.any,
  endDate: React.PropTypes.any,
  isCustomDate: React.PropTypes.any,
  isInvalidDate: React.PropTypes.any,
  linkedCalendars: React.PropTypes.any,
  locale: React.PropTypes.any,
  maxDate: React.PropTypes.any,
  minDate: React.PropTypes.any,
  opens: React.PropTypes.any,
  parentEl: React.PropTypes.any,
  ranges: React.PropTypes.any,
  showCustomRangeLabel: React.PropTypes.any,
  showDropdowns: React.PropTypes.any,
  showISOWeekNumbers: React.PropTypes.any,
  showWeekNumbers: React.PropTypes.any,
  singleDatePicker: React.PropTypes.any,
  startDate: React.PropTypes.any,
  template: React.PropTypes.any,
  timePicker: React.PropTypes.any,
  timePicker24Hour: React.PropTypes.any,
  timePickerIncrement: React.PropTypes.any,
  timePickerSeconds: React.PropTypes.any,
  onChangeInput: React.PropTypes.func,
};

InputDateTime.defaultProps=  {
  children: 'Click here',
  alwaysShowCalendars: undefined,
  applyClass: undefined,
  autoApply: undefined,
  autoUpdateInput: undefined,
  buttonClasses: undefined,
  cancelClass: undefined,
  dateLimit: undefined,
  drops: undefined,
  endDate: undefined,
  isCustomDate: undefined,
  isInvalidDate: undefined,
  linkedCalendars: undefined,
  locale: undefined,
  maxDate: undefined,
  minDate: undefined,
  opens: undefined,
  parentEl: undefined,
  ranges: undefined,
  showCustomRangeLabel: undefined,
  showDropdowns: undefined,
  showISOWeekNumbers: undefined,
  showWeekNumbers: undefined,
  singleDatePicker: undefined,
  startDate: undefined,
  template: undefined,
  timePicker: undefined,
  timePicker24Hour: undefined,
  timePickerIncrement: undefined,
  timePickerSeconds: undefined,
  onChangeInput: () => {},
};

export default InputDateTime;
