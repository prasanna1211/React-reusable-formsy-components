/**
 * Input Date Range Picker
 */
import React from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment';
import _ from 'underscore';

class InputDateTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: this.props.value.startDate.format('DD/MM/YYYY hh:mm:ss a'),
      endDate: this.props.value.endDate.format('DD/MM/YYYY hh:mm:ss a'),
    };

    this.onChangeInput = this.onChangeInput.bind(this);
  }

  // Setting the default value
  componentDidMount() {
    this.props.setValue({
      startDate: this.props.value.startDate.format('DD/MM/YYYY hh:mm:ss a'),
      endDate: this.props.value.endDate.format('DD/MM/YYYY hh:mm:ss a'),
    });
  }


  // When new value is recieved forecefully update the state
  componentWillReceiveProps(nextProps) {
    if (!nextProps.value.startDate.isSame(this.props.value.startDate) ||
        !nextProps.value.endDate.isSame(this.props.value.endDate) ||
        nextProps.isValuePristine) { // eslint-disable-line
      this.setState({
        startDate: nextProps.value.startDate.format('DD/MM/YYYY hh:mm:ss a'),
        endDate: nextProps.value.endDate.format('DD/MM/YYYY hh:mm:ss a'),
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(this.state.startDate, nextState.startDate) || !_.isEqual(this.state.endDate, nextState.endDate);
  }

  // only when there is state change, change formsy and display value to be changed
  componentDidUpdate(prevProps, prevState) {
    if (prevState.startDate !== this.state.startDate || prevState.endDate !== this.state.endDate) {
      const value = {
        startDate: this.state.startDate,
        endDate: this.state.endDate,
      };
      this.props.setValue(value);
      this.props.onChangeInput(this.props.name, value);
    }
  }

  // On typing, change the state
  onChangeInput(event, picker) {
    this.setState({
      startDate: picker.startDate.format('DD/MM/YYYY hh:mm:ss a'),
      endDate: picker.endDate.format('DD/MM/YYYY hh:mm:ss a'),
    });
  }

  render() {
    const errorMessageStyle = this.props.inline ? { display: 'inline-block' } : null;
    const value = this.props.getValue();
    console.log(' rendered date time ', this.state.startDate, this.state.endDate);
    return (
      <div
        className={this.props.wrapperClass}
        style={this.props.wrapperStyle}
      >
        <label
          htmlFor={this.props.name}
        >
          <DateRangePicker
            startDate={moment(value.startDate, 'DD/MM/YYYY hh:mm:ss a')}
            endDate={moment(value.endDate, 'DD/MM/YYYY hh:mm:ss a')}
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
            onApply={this.onChangeInput}
            onShow={this.props.onShow}
            onHide={this.props.onHide}
            onShowCalendar={this.props.onShowCalendar}
            onHideCalendar={this.props.onHideCalendar}
            onCancel={this.props.onCancel}
            onEvent={this.props.onEvent}
          >
            {this.props.children}
          </DateRangePicker>
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
  onShow: React.PropTypes.func,
  onHide: React.PropTypes.func,
  onShowCalendar: React.PropTypes.func,
  onHideCalendar: React.PropTypes.func,
  onCancel: React.PropTypes.func,
  onEvent: React.PropTypes.func,
  timePickerIncrement: React.PropTypes.any,
  timePickerSeconds: React.PropTypes.any,
  onChangeInput: React.PropTypes.func,
  value: React.PropTypes.object,
  setValue: React.PropTypes.func.isRequired,
  getValue: React.PropTypes.func.isRequired,
  getErrorMessage: React.PropTypes.func.isRequired,
  name: React.PropTypes.string.isRequired,
  wrapperClass: React.PropTypes.string,
  wrapperStyle: React.PropTypes.string,
  inline: React.PropTypes.bool,
  children: React.PropTypes.any,
  errorClass: React.PropTypes.string,
};

InputDateTime.defaultProps = {
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
  onApply: () => {},
  onShow: () => {},
  onHide: () => {},
  onShowCalendar: () => {},
  onHideCalendar: () => {},
  onCancel: () => {},
  onEvent: () => {},
  value: {
    startDate: moment('01/01/1900 12:00:00 am'),
    endDate: moment('01/01/2100 12:00:00 am'),
  },
  wrapperClass: undefined,
  wrapperStyle: undefined,
  inline: undefined,
  errorClass: undefined,
};

export default InputDateTime;
