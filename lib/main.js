/**
 * root JS file: exports as a HOC wrapped component
 */
import Formsy from 'formsy-react'; // eslint-disable-line
import { HOC } from 'formsy-react'; // eslint-disable-line
import InputTextBox from './InputTextBox.js';
import InputSelectBox from './InputSelectBox.js';

Formsy.addValidationRule('changeRequired', (values, value) => {
  return (value !== 'selectOption');
});

export const InputText = HOC(InputTextBox);
export const InputSelect = HOC(InputSelectBox);
