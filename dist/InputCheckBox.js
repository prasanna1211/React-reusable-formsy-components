'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pickReactKnownProp = require('pick-react-known-prop');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Input Text Box ( <input type = "text>")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Both formsy value and display value will change by changing the state value
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var InputCheckBox = function (_React$Component) {
  _inherits(InputCheckBox, _React$Component);

  function InputCheckBox(props) {
    _classCallCheck(this, InputCheckBox);

    var _this = _possibleConstructorReturn(this, (InputCheckBox.__proto__ || Object.getPrototypeOf(InputCheckBox)).call(this, props));

    _this.state = {
      value: _this.props.value
    };

    _this.onChangeInput = _this.onChangeInput.bind(_this);
    return _this;
  }

  // Setting the default value


  _createClass(InputCheckBox, [{
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
        this.props.onChangeInput();
      }
    }

    // On typing, change the state

  }, {
    key: 'onChangeInput',
    value: function onChangeInput() {
      this.setState({
        value: !this.state.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      // inline or block based on the props
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
            htmlFor: this.props.name
          },
          _react2.default.createElement('input', _extends({}, (0, _pickReactKnownProp.pickHTMLProps)(this.props), {
            type: 'checkbox',
            ref: this.props.ref,
            className: this.props.fieldClass,
            name: this.props.name,
            checked: this.props.getValue(),
            onChange: this.onChangeInput,
            required: this.props.required,
            style: this.props.fieldStyle
          })),
          this.props.displayName
        ),
        _react2.default.createElement(
          'div',
          { className: 'error-message', style: errorMessageStyle },
          this.props.getErrorMessage()
        )
      );
    }
  }]);

  return InputCheckBox;
}(_react2.default.Component);

InputCheckBox.propTypes = {
  name: _react2.default.PropTypes.string.isRequired,
  value: _react2.default.PropTypes.any,
  wrapperClass: _react2.default.PropTypes.string,
  fieldClass: _react2.default.PropTypes.string,
  onChangeInput: _react2.default.PropTypes.func,
  required: _react2.default.PropTypes.bool,
  setValue: _react2.default.PropTypes.func.isRequired,
  wrapperStyle: _react2.default.PropTypes.object,
  fieldStyle: _react2.default.PropTypes.object,
  inline: _react2.default.PropTypes.bool,
  getErrorMessage: _react2.default.PropTypes.func.isRequired,
  ref: _react2.default.PropTypes.string,
  getValue: _react2.default.PropTypes.func.isRequired,
  displayName: _react2.default.PropTypes.string.isRequired
};

InputCheckBox.defaultProps = {
  value: false,
  wrapperClass: '',
  fieldClass: '',
  onChangeInput: function onChangeInput() {},
  validations: undefined,
  required: undefined,
  wrapperStyle: undefined,
  fieldStyle: undefined,
  inline: undefined,
  validationError: undefined,
  ref: ''
};

exports.default = InputCheckBox;
module.exports = exports['default'];
//# sourceMappingURL=InputCheckBox.js.map