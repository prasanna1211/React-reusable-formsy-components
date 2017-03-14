'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputSelect = exports.InputText = undefined;

var _formsyReact = require('formsy-react');

var _formsyReact2 = _interopRequireDefault(_formsyReact);

var _InputTextBox = require('./InputTextBox.js');

var _InputTextBox2 = _interopRequireDefault(_InputTextBox);

var _InputSelectBox = require('./InputSelectBox.js');

var _InputSelectBox2 = _interopRequireDefault(_InputSelectBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line
/**
 * root JS file: exports as a HOC wrapped component
 */
_formsyReact2.default.addValidationRule('changeRequired', function (values, value) {
  return value !== 'selectOption';
}); // eslint-disable-line
var InputText = exports.InputText = (0, _formsyReact.HOC)(_InputTextBox2.default);
var InputSelect = exports.InputSelect = (0, _formsyReact.HOC)(_InputSelectBox2.default);
//# sourceMappingURL=main.js.map