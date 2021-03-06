'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

require('react-select/dist/react-select.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputSelectCustom = function (_React$Component) {
  _inherits(InputSelectCustom, _React$Component);

  function InputSelectCustom(props) {
    _classCallCheck(this, InputSelectCustom);

    var _this = _possibleConstructorReturn(this, (InputSelectCustom.__proto__ || Object.getPrototypeOf(InputSelectCustom)).call(this, props));

    _this.state = {
      value: _this.props.value
    };

    _this.onChangeInput = _this.onChangeInput.bind(_this);
    return _this;
  }

  // Setting the default value


  _createClass(InputSelectCustom, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.setValue(this.props.value);
    }

    // When new value is recieved forecefully update the state

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!_underscore2.default.isEqual(nextProps.value, this.props.value) || nextProps.isValuePristine) {
        // eslint-disable-line
        this.setState({
          value: nextProps.value
        });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !_underscore2.default.isEqual(this.state.value, nextState.value);
    }

    // only when there is state change, change formsy and display value to be changed

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // eslint-disable-line
      if (this.state.value !== prevState.value) {
        this.props.setValue(this.state.value);
        this.props.onChangeInput(this.props.name, this.state.value);
      }
    }

    // On typing, change the state

  }, {
    key: 'onChangeInput',
    value: function onChangeInput(selectedGroup) {
      var activeValue = void 0;
      if (_underscore2.default.isArray(selectedGroup)) {
        activeValue = _underscore2.default.map(selectedGroup, function (option) {
          return option.value;
        });
      } else {
        activeValue = selectedGroup.value;
      }
      this.setState({
        value: activeValue
      });
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(' rendered input select custom ', this.state.value);
      var errorMessageStyle = this.props.inline ? { display: 'inline-block' } : null;
      return _react2.default.createElement(
        'div',
        {
          className: this.props.wrapperClass,
          style: this.props.wrapperStyle
        },
        _react2.default.createElement(
          'label',
          {
            htmlFor: this.props.name,
            className: this.props.labelClass
          },
          this.props.label
        ),
        _react2.default.createElement(_reactSelect2.default, _extends({}, this.props, {
          onChange: this.onChangeInput,
          value: this.state.value,
          className: this.props.selectClass
        })),
        _react2.default.createElement(
          'div',
          { className: this.props.errorClass, style: errorMessageStyle },
          this.props.getErrorMessage()
        )
      );
    }
  }]);

  return InputSelectCustom;
}(_react2.default.Component);

InputSelectCustom.propTypes = {
  name: _react2.default.PropTypes.string.isRequired,
  value: _react2.default.PropTypes.any,
  onChangeInput: _react2.default.PropTypes.func,
  setValue: _react2.default.PropTypes.func.isRequired,
  getValue: _react2.default.PropTypes.func.isRequired,
  wrapperClass: _react2.default.PropTypes.string,
  wrapperStyle: _react2.default.PropTypes.object,
  inline: _react2.default.PropTypes.bool,
  getErrorMessage: _react2.default.PropTypes.func.isRequired,
  errorClass: _react2.default.PropTypes.string,
  label: _react2.default.PropTypes.string,
  labelClass: _react2.default.PropTypes.string,
  selectClass: _react2.default.PropTypes.string
};

InputSelectCustom.defaultProps = {
  value: undefined,
  onChangeInput: function onChangeInput() {},
  selectClass: undefined,
  wrapperClass: undefined,
  wrapperStyle: undefined,
  inline: undefined,
  errorClass: undefined,
  label: undefined,
  labelClass: undefined
};

exports.default = InputSelectCustom;
module.exports = exports['default'];
//# sourceMappingURL=InputSelectCustom.js.map