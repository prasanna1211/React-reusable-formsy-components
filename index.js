import { HOC } from 'formsy-react';
import InputTextBox from './lib/InputTextBox.js';
/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
module.exports = {
  InputTextBox: HOC(InputTextBox),
};
