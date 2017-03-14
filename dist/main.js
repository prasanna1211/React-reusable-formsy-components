'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputRadioButtonGroup = exports.InputCheck = exports.InputSelect = exports.InputText = undefined;

var _formsyReact = require('formsy-react');

var _formsyReact2 = _interopRequireDefault(_formsyReact);

var _InputTextBox = require('./InputTextBox.js');

var _InputTextBox2 = _interopRequireDefault(_InputTextBox);

var _InputSelectBox = require('./InputSelectBox.js');

var _InputSelectBox2 = _interopRequireDefault(_InputSelectBox);

var _InputCheckBox = require('./InputCheckBox.js');

var _InputCheckBox2 = _interopRequireDefault(_InputCheckBox);

var _InputRadioButton = require('./InputRadioButton.js');

var _InputRadioButton2 = _interopRequireDefault(_InputRadioButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line
/**
 * root JS file: exports as a HOC wrapped component
 */
_formsyReact2.default.addValidationRule('actionRequired', function (values, value) {
  return value !== 'none';
}); // eslint-disable-line
var InputText = exports.InputText = (0, _formsyReact.HOC)(_InputTextBox2.default);
var InputSelect = exports.InputSelect = (0, _formsyReact.HOC)(_InputSelectBox2.default);
var InputCheck = exports.InputCheck = (0, _formsyReact.HOC)(_InputCheckBox2.default);
var InputRadioButtonGroup = exports.InputRadioButtonGroup = (0, _formsyReact.HOC)(_InputRadioButton2.default);
//# sourceMappingURL=main.js.map