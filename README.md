# React-reusable-formsy-components - Under Development. First Stable Release by 17/03/2017

## Introduction

A simple library for form elements which can be used with react formsy library.
Currently contains:
1. Input text
2. Select box
3. Check box
4. Radio buttonShow what the library does as concisely as possible, developers should be able to figure out how your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Motivation

A simple reusable component which can be used for following cases.
1. A basic form element
2. Controlling the actual value through props from parent.
3. Component itself has its own state which interacts with parent component and formsy and keeps its value updated, ie. the component state will update based on the value props. Also it can respond to user interactions.
4. Supports all synthetic events as callback (through props) which can be passed to the native HTML element.

## Code Example
```Javascript
// Import the necessary HOC wrapped components
import { InputText, InputSelect, InputCheck, InputRadioButtonGroup } from reusable-formsy-components;

// Pass this as props to selectbox. It will render based on the name and value.
this.selectBoxOptions = [
      { name: "option1", value: "1" },
      { name: "option2", value: "2" }
    ];

// Pass this as props to radio buttons.
this.radioButtonGroupOptions = [
      { name: "option1", value: "1", displayName: "1" },
      { name: "option2", value: "2", displayName: "2" }
];

// in the render function of the component declare a fo
<Formsy.Form
  ref="hello"
  onChange={this.onChangeForm}
  noValidate
>

  // Follows the same rules for formsy components
  // You can pass in validations as usual to the formsy component
  <InputText
    name="inputText"
    validations="isEmail"
    validationError="Not a valid"
  />

  // you can pass in a value. It can be a default value or changing over time. The component state will update itself based on the passed in value
  <InputSelect
    name="inputSelect"Will be included in the next version which will be by 17/02/2017.
    options={this.selectBoxOptions}
    value="2"
  />

  // Currently it supports input check box and not checkbox group
  <InputCheck
    name="inputCheck"
    displayName="input check"
  />

  // values can be passed to radio buttons too
  <InputRadioButtonGroup
    name="inputRadio"
    options={this.radioButtonGroupOptions}
    value="2"
  />

   // Resetting the form, resets all form elements to pristine values ( Provided you pass in a value at the time of mounting the component else it won't reset)
  <input
    type="button"
    value="clear"
    onClick={this.onReset}
  />

  // Submitting the form
  <button
    type="submit"
    disabled={!this.state.canSubmit}
    onClick={this.onSubmit}
  >
    Submit
  </button>
</Formsy.Form>

Any synthetic react events can be passed to the component as props.
Every input element is wrapped in a div. Any error message for the formsy component can be positioned inline or block.

```
## Installation

npm i reusable-formsy-components

## API Reference

### 1. InputText

|PropName|Type|Requirement|Description|
|---|---|---|---|
| name | string|isRequired |name of the form element|,
| value | any | optional | Pass this as props to set the value |
| wrapperClass | string | optional | css class for the wrapper div |,
| fieldClass | string | optional | css class for the input element,
| onChangeInput | func | optional | callback to the parent component based on user interaction|,
| required | bool | optional | specifies whether form requires this to be valid |,
| wrapperStyle | object | optional | Set inline style for wrapper div |,
| fieldStyle | object | optional | Set inline style for input element |,
| inline | bool | optional | Display error message inline or block |,
| ref | string | optional | Passing refs for accessing |,

### 2. InputCheck

|PropName|Type|Requirement|Description|
|---|---|---|---|
| name | string| Required |name of the form element|,
| displayName | string | Required | display name of the checkbox|
| value | any | optional | Pass this as props to set the value |
| wrapperClass | string | optional | css class for the wrapper div |,
| selectClass | string | optional | css class for the select element,
| optionClass | string | optional | css class for the option element,
| onChangeInput | func | optional | callback to the parent component based on user interaction|,
| required | bool | optional | specifies whether form requires this to be valid |,
| inline | bool | optional | Display error message inline or block |,
| ref | string | optional | Passing refs for accessing |,

### 3. InputSelect
|PropName|Type|Requirement|Description|
|---|---|---|---|
| name | string| Required |name of the form element|,
| options | array | Required | Array of objects { name (display), value (actual value holded) } |
| value | any | optional | Pass this as props to set the value |
| wrapperClass | string | optional | css class for the wrapper div |,
| selectClass | string | optional | css class for the select element,
| optionClass | string | optional | css class for the option element,
| onChangeInput | func | optional | callback to the parent component based on user interaction|,
| required | bool | optional | specifies whether form requires this to be valid |,
| inline | bool | optional | Display error message inline or block |,
| ref | string | optional | Passing refs for accessing |,

### 4. InputRadioButton
|PropName|Type|Requirement|Description|
|---|---|---|---|
| name | string| Required |name of the form element|,
| options | array | Required | Array of objects { name (form value will be on this name), value (actual value holded), displayName (display) } |
| value | any | optional | Pass this as props to set the value |
| wrapperClass | string | optional | css class for the wrapper div |,
| selectClass | string | optional | css class for the select element,
| optionClass | string | optional | css class for the option element,
| onChangeInput | func | optional | callback to the parent component based on user interaction|,
| required | bool | optional | specifies whether form requires this to be valid |,
| inline | bool | optional | Display error message inline or block |,
| ref | string | optional | Passing refs for accessing |,

## Tests

Tests will be included in first stable release.

## Contributors
The whole aim is to keep it simple and more generic. Feel free to suggest improvements.

## License

MIT License
