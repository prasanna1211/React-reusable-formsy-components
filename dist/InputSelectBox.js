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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Input Select Box ( <select></select>")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Both formsy value and display value will change by changing the state value
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var InputSelectBox = function (_React$Component) {
  _inherits(InputSelectBox, _React$Component);

  function InputSelectBox(props) {
    _classCallCheck(this, InputSelectBox);

    var _this = _possibleConstructorReturn(this, (InputSelectBox.__proto__ || Object.getPrototypeOf(InputSelectBox)).call(this, props));

    _this.state = {
      value: props.value
    };

    _this.onChangeSelect = _this.onChangeSelect.bind(_this);
    return _this;
  }

  // Setting the default value


  _createClass(InputSelectBox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.setValue(this.props.value);
    }

    // When new value is recieved forecefully update the state

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.props.value) {
        this.setState({
          value: nextProps.value
        });
      }
    }

    // only when there is state change, change formsy and display value to be changed

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // eslint-disable-line
      if (this.state.value !== prevState.value) {
        this.props.setValue(this.state.value);
        this.props.onChangeInput(this.state.value);
      }
    }

    // On changing sleect, change the state

  }, {
    key: 'onChangeSelect',
    value: function onChangeSelect(event) {
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      // inline or block based on the props
      var errorMessageStyle = this.props.inline ? { display: 'inline-block' } : null;
      return _react2.default.createElement(
        'div',
        {
          className: this.props.wrapperClass,
          style: this.props.wrapperStyle
        },
        _react2.default.createElement(
          'select',
          _extends({}, (0, _pickReactKnownProp.pickHTMLProps)(this.props), {
            className: this.props.selectClass,
            ref: this.props.ref,
            name: this.props.name,
            value: this.props.getValue(),
            onChange: this.onChangeSelect,
            required: this.props.required
          }),
          _react2.default.createElement(
            'option',
            {
              key: 'selectOption',
              value: 'none',
              disabled: this.props.disableDefaultTextOnSelect
            },
            this.props.defaultText
          ),
          _underscore2.default.map(this.props.options, function (optionData) {
            return _react2.default.createElement(
              'option',
              {
                key: optionData.value,
                value: optionData.value,
                className: _this2.props.optionClass
              },
              optionData.name
            );
          })
        ),
        _react2.default.createElement(
          'div',
          { className: this.props.errorClass, style: errorMessageStyle },
          this.props.getErrorMessage()
        )
      );
    }
  }]);

  return InputSelectBox;
}(_react2.default.Component);

InputSelectBox.propTypes = {
  options: _react2.default.PropTypes.array.isRequired,
  wrapperClass: _react2.default.PropTypes.string,
  errorClass: _react2.default.PropTypes.string,
  wrapperStyle: _react2.default.PropTypes.object,
  getErrorMessage: _react2.default.PropTypes.func.isRequired,
  getValue: _react2.default.PropTypes.func.isRequired,
  value: _react2.default.PropTypes.any,
  setValue: _react2.default.PropTypes.func.isRequired,
  onChangeInput: _react2.default.PropTypes.func,
  inline: _react2.default.PropTypes.bool,
  ref: _react2.default.PropTypes.string,
  name: _react2.default.PropTypes.string.isRequired,
  required: _react2.default.PropTypes.bool,
  disableDefaultTextOnSelect: _react2.default.PropTypes.bool,
  defaultText: _react2.default.PropTypes.string,
  selectClass: _react2.default.PropTypes.string,
  optionClass: _react2.default.PropTypes.string
};

InputSelectBox.defaultProps = {
  wrapperClass: undefined,
  wrapperStyle: undefined,
  errorClass: undefined,
  value: 'selectOption',
  onChangeInput: function onChangeInput() {},
  inline: undefined,
  ref: undefined,
  disableDefaultTextOnSelect: true,
  required: undefined,
  defaultText: 'Select An Option',
  selectClass: '',
  optionClass: ''
};

exports.default = InputSelectBox;
module.exports = exports['default'];
//# sourceMappingURL=InputSelectBox.js.map