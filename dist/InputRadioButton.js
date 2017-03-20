'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pickReactKnownProp = require('pick-react-known-prop');

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Input Text Box ( <input type = "text>")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Both formsy value and display value will change by changing the state value
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var InputRadioButton = function (_React$Component) {
  _inherits(InputRadioButton, _React$Component);

  function InputRadioButton(props) {
    _classCallCheck(this, InputRadioButton);

    var _this = _possibleConstructorReturn(this, (InputRadioButton.__proto__ || Object.getPrototypeOf(InputRadioButton)).call(this, props));

    _this.state = {
      value: props.value
    };

    _this.onChangeInput = _this.onChangeInput.bind(_this);
    _this.renderRadioButtons = _this.renderRadioButtons.bind(_this);
    return _this;
  }

  // Setting the default value


  _createClass(InputRadioButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.setValue(this.props.value);
    }

    // When new value is recieved forecefully update the state

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.props.value || nextProps.isValuePristine) {
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
    value: function onChangeInput(value) {
      this.setState({
        value: value
      });
    }

    // Renders the radio buttons

  }, {
    key: 'renderRadioButtons',
    value: function renderRadioButtons(options) {
      var _this2 = this;

      var newThis = this;
      var radioButtons = _underscore2.default.map(options, function (option) {
        return _react2.default.createElement(
          'label',
          { key: option.name, htmlFor: option.name },
          _react2.default.createElement('input', _extends({}, (0, _pickReactKnownProp.pickHTMLProps)(newThis.props), {
            type: 'radio',
            checked: newThis.state.value === option.value,
            className: newThis.props.fieldClass,
            name: newThis.props.name,
            onChange: function onChange() {
              _this2.onChangeInput(option.value);
            },
            required: newThis.props.required,
            style: newThis.props.fieldStyle
          })),
          option.displayName
        );
      });
      return radioButtons;
    }
  }, {
    key: 'render',
    value: function render() {
      // inline or block based on the props
      console.log(' rendered radio button ', this.state.value);
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
        this.renderRadioButtons(this.props.options),
        _react2.default.createElement(
          'div',
          { className: this.props.errorClass, style: errorMessageStyle },
          this.props.getErrorMessage()
        )
      );
    }
  }]);

  return InputRadioButton;
}(_react2.default.Component);

InputRadioButton.propTypes = {
  name: _react2.default.PropTypes.string.isRequired, //eslint-disable-line
  value: _react2.default.PropTypes.any,
  options: _react2.default.PropTypes.array.isRequired,
  wrapperClass: _react2.default.PropTypes.string,
  fieldClass: _react2.default.PropTypes.string, //eslint-disable-line
  onChangeInput: _react2.default.PropTypes.func,
  required: _react2.default.PropTypes.bool, //eslint-disable-line
  setValue: _react2.default.PropTypes.func.isRequired,
  wrapperStyle: _react2.default.PropTypes.object,
  fieldStyle: _react2.default.PropTypes.object, //eslint-disable-line
  inline: _react2.default.PropTypes.bool,
  getErrorMessage: _react2.default.PropTypes.func.isRequired,
  ref: _react2.default.PropTypes.string, //eslint-disable-line
  getValue: _react2.default.PropTypes.func.isRequired, //eslint-disable-line
  errorClass: _react2.default.PropTypes.string,
  label: _react2.default.PropTypes.string,
  labelClass: _react2.default.PropTypes.string
};

InputRadioButton.defaultProps = {
  value: undefined,
  wrapperClass: undefined,
  fieldClass: undefined,
  onChangeInput: function onChangeInput() {},
  validations: undefined,
  required: undefined,
  wrapperStyle: undefined,
  fieldStyle: undefined,
  inline: undefined,
  validationError: undefined,
  ref: '',
  errorClass: undefined,
  label: undefined,
  labelClass: undefined
};

exports.default = InputRadioButton;
module.exports = exports['default'];
//# sourceMappingURL=InputRadioButton.js.map