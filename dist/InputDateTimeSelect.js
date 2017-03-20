'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrapDaterangepicker = require('react-bootstrap-daterangepicker');

var _reactBootstrapDaterangepicker2 = _interopRequireDefault(_reactBootstrapDaterangepicker);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Input Date Range Picker
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var InputDateTime = function (_React$Component) {
  _inherits(InputDateTime, _React$Component);

  function InputDateTime(props) {
    _classCallCheck(this, InputDateTime);

    var _this = _possibleConstructorReturn(this, (InputDateTime.__proto__ || Object.getPrototypeOf(InputDateTime)).call(this, props));

    _this.state = {
      startDate: _this.props.value.startDate.format('DD/MM/YYYY hh:mm:ss a'),
      endDate: _this.props.value.endDate.format('DD/MM/YYYY hh:mm:ss a')
    };

    _this.onChangeInput = _this.onChangeInput.bind(_this);
    return _this;
  }

  // Setting the default value


  _createClass(InputDateTime, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.setValue({
        startDate: this.props.value.startDate.format('DD/MM/YYYY hh:mm:ss a'),
        endDate: this.props.value.endDate.format('DD/MM/YYYY hh:mm:ss a')
      });
    }

    // When new value is recieved forecefully update the state

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!nextProps.value.startDate.isSame(this.props.value.startDate) || !nextProps.value.endDate.isSame(this.props.value.endDate) || nextProps.isValuePristine) {
        // eslint-disable-line
        this.setState({
          startDate: nextProps.value.startDate.format('DD/MM/YYYY hh:mm:ss a'),
          endDate: nextProps.value.endDate.format('DD/MM/YYYY hh:mm:ss a')
        });
      }
    }

    // only when there is state change, change formsy and display value to be changed

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.startDate !== this.state.startDate || prevState.endDate !== this.state.endDate) {
        var value = {
          startDate: this.state.startDate,
          endDate: this.state.endDate
        };
        this.props.setValue(value);
        this.props.onChangeInput(this.props.name, value);
      }
    }

    // On typing, change the state

  }, {
    key: 'onChangeInput',
    value: function onChangeInput(event, picker) {
      this.setState({
        startDate: picker.startDate.format('DD/MM/YYYY hh:mm:ss a'),
        endDate: picker.endDate.format('DD/MM/YYYY hh:mm:ss a')
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var errorMessageStyle = this.props.inline ? { display: 'inline-block' } : null;
      var value = this.props.getValue();
      return _react2.default.createElement(
        'div',
        {
          className: this.props.wrapperClass,
          style: this.props.wrapperStyle
        },
        _react2.default.createElement(
          'label',
          {
            htmlFor: this.props.name
          },
          _react2.default.createElement(
            _reactBootstrapDaterangepicker2.default,
            {
              startDate: (0, _moment2.default)(value.startDate, 'DD/MM/YYYY hh:mm:ss a'),
              endDate: (0, _moment2.default)(value.endDate, 'DD/MM/YYYY hh:mm:ss a'),
              alwaysShowCalendars: this.props.alwaysShowCalendars,
              applyClass: this.props.applyClass,
              autoApply: this.props.autoApply,
              autoUpdateInput: this.props.autoUpdateInput,
              buttonClasses: this.props.buttonClasses,
              cancelClass: this.props.cancelClass,
              dateLimit: this.props.dateLimit,
              drops: this.props.drops,
              isCustomDate: this.props.isCustomDate,
              isInvalidDate: this.props.isInvalidDate,
              linkedCalendars: this.props.linkedCalendars,
              locale: this.props.locale,
              maxDate: this.props.maxDate,
              minDate: this.props.minDate,
              opens: this.props.opens,
              parentEl: this.props.parentEl,
              ranges: this.props.ranges,
              showCustomRangeLabel: this.props.showCustomRangeLabel,
              showDropdowns: this.props.showDropdowns,
              showISOWeekNumbers: this.props.showISOWeekNumbers,
              showWeekNumbers: this.props.showWeekNumbers,
              singleDatePicker: this.props.singleDatePicker,
              template: this.props.template,
              timePicker: this.props.timePicker,
              timePicker24Hour: this.props.timePicker24Hour,
              timePickerIncrement: this.props.timePickerIncrement,
              timePickerSeconds: this.props.timePickerSeconds,
              onApply: this.onChangeInput,
              onShow: this.props.onShow,
              onHide: this.props.onHide,
              onShowCalendar: this.props.onShowCalendar,
              onHideCalendar: this.props.onHideCalendar,
              onCancel: this.props.onCancel,
              onEvent: this.props.onEvent
            },
            this.props.children
          )
        ),
        _react2.default.createElement(
          'div',
          { className: this.props.errorClass, style: errorMessageStyle },
          this.props.getErrorMessage()
        )
      );
    }
  }]);

  return InputDateTime;
}(_react2.default.Component);

InputDateTime.propTypes = {
  alwaysShowCalendars: _react2.default.PropTypes.any,
  applyClass: _react2.default.PropTypes.any,
  autoApply: _react2.default.PropTypes.any,
  autoUpdateInput: _react2.default.PropTypes.any,
  buttonClasses: _react2.default.PropTypes.any,
  cancelClass: _react2.default.PropTypes.any,
  dateLimit: _react2.default.PropTypes.any,
  drops: _react2.default.PropTypes.any,
  endDate: _react2.default.PropTypes.any,
  isCustomDate: _react2.default.PropTypes.any,
  isInvalidDate: _react2.default.PropTypes.any,
  linkedCalendars: _react2.default.PropTypes.any,
  locale: _react2.default.PropTypes.any,
  maxDate: _react2.default.PropTypes.any,
  minDate: _react2.default.PropTypes.any,
  opens: _react2.default.PropTypes.any,
  parentEl: _react2.default.PropTypes.any,
  ranges: _react2.default.PropTypes.any,
  showCustomRangeLabel: _react2.default.PropTypes.any,
  showDropdowns: _react2.default.PropTypes.any,
  showISOWeekNumbers: _react2.default.PropTypes.any,
  showWeekNumbers: _react2.default.PropTypes.any,
  singleDatePicker: _react2.default.PropTypes.any,
  startDate: _react2.default.PropTypes.any,
  template: _react2.default.PropTypes.any,
  timePicker: _react2.default.PropTypes.any,
  timePicker24Hour: _react2.default.PropTypes.any,
  onShow: _react2.default.PropTypes.func,
  onHide: _react2.default.PropTypes.func,
  onShowCalendar: _react2.default.PropTypes.func,
  onHideCalendar: _react2.default.PropTypes.func,
  onCancel: _react2.default.PropTypes.func,
  onEvent: _react2.default.PropTypes.func,
  timePickerIncrement: _react2.default.PropTypes.any,
  timePickerSeconds: _react2.default.PropTypes.any,
  onChangeInput: _react2.default.PropTypes.func,
  value: _react2.default.PropTypes.object,
  setValue: _react2.default.PropTypes.func.isRequired,
  getValue: _react2.default.PropTypes.func.isRequired,
  getErrorMessage: _react2.default.PropTypes.func.isRequired,
  name: _react2.default.PropTypes.string.isRequired,
  wrapperClass: _react2.default.PropTypes.string,
  wrapperStyle: _react2.default.PropTypes.string,
  inline: _react2.default.PropTypes.bool,
  children: _react2.default.PropTypes.any,
  errorClass: _react2.default.PropTypes.string
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
  onChangeInput: function onChangeInput() {},
  onApply: function onApply() {},
  onShow: function onShow() {},
  onHide: function onHide() {},
  onShowCalendar: function onShowCalendar() {},
  onHideCalendar: function onHideCalendar() {},
  onCancel: function onCancel() {},
  onEvent: function onEvent() {},
  value: {
    startDate: (0, _moment2.default)('01/01/1900 12:00:00 am'),
    endDate: (0, _moment2.default)('01/01/2100 12:00:00 am')
  },
  wrapperClass: undefined,
  wrapperStyle: undefined,
  inline: undefined,
  errorClass: undefined
};

exports.default = InputDateTime;
module.exports = exports['default'];
//# sourceMappingURL=InputDateTimeSelect.js.map