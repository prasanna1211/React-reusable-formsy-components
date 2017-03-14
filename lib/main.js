/**
 * root JS file: exports as a HOC wrapped component
 */
import { HOC } from 'formsy-react';
import InputTextBox from './InputTextBox.js';

export const InputTextbox = HOC(InputTextBox);
