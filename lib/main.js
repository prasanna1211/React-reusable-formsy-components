/**
 * root JS file: exports as a HOC wrapped component
 */
import Formsy from 'formsy-react'; // eslint-disable-line
import { HOC } from 'formsy-react'; // eslint-disable-line
import InputTextBox from './InputTextBox.js';
import InputSelectBox from './InputSelectBox.js';
import InputCheckBox from './InputCheckBox.js';
import InputRadioButton from './InputRadioButton.js';
import InputSelectReact from './InputSelectCustom.js';
import InputDateTimeSelect from './InputDateTimeSelect.js';

Formsy.addValidationRule('actionRequired', (values, value) => {
  return (value !== 'none');
});

export const InputText = HOC(InputTextBox);
export const InputSelect = HOC(InputSelectBox);
export const InputCheck = HOC(InputCheckBox);
export const InputRadioButtonGroup = HOC(InputRadioButton);
export const InputSelectCustom = HOC(InputSelectReact);
export const InputDateTime = HOC(InputDateTimeSelect);
