# React-reusable-formsy-components

## Introduction

A simple library for form elements which can be used with react-formsy library.

Currently contains:
1. Input text   ( Native HTML <input type="text" />)
2. Select box   ( Native HTML <select> <option /> </select>)
3. Check box    ( Native HTML <input type="checkbox" />)
4. Radio button ( Native HTML <input type="radio" />)
5. single and multiple select using react-select library
6. Date range picker

## Motivation

A simple reusable component which can be used for following cases (Components in this library are called Lib Components).

1. A basic Lib Component which will bind with Formsy Form.
2. A component which efficiently renders the content.
2. Controlling the (value set on the element and its display) through (props from parent or user input).
3. Lib Component itself has its own state which interacts with parent component ( User defined component in which the form will be rendered) and formsy HOC and keeps its value updated, ie. the component state will update based on the value props. Also it can respond to user interactions.
4. Supports all synthetic events as callback (through props) which can be passed to the native HTML element. Just pass to the events to Lib component through props.
5. Show Error message for validations either inline or block.

## Default Structure of the component

Every input element is wrapped in a div.
Any error message for the formsy component can be positioned inline or block.

```JS
<div
  className={this.props.wrapperClass}
  style={this.props.wrapperStyle}
>
  {Content}
  <div className={this.props.errorClass} style={errorMessageStyle}>
    { this.props.getErrorMessage() }
  </div>
</div>
```

## Code Example

```JS
// Import the necessary Lib Components
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

// in the render function of the your component declare a form

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      canSubmit: true,
      selectValue: '',
      isSettingPristineValue: {},
    };

    // Hold the form names. Used to construct a state object with true.
    this.formName = [1, 2, 3, 4, 5, 6];
    // On changing input. used as callback for altering {this.state.isSettingPristineValue}
    this.onChangeInput = this.onChangeInput.bind(this);
    // Custom reset function. Resets the pristine values
    this.onReset = this.onReset.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // Static options
    this.selectBoxOptions = [
      { name: "option1", value: "1" },
      { name: "option2", value: "2" }
    ];
    this.radioButtonGroupOptions = [
      { name: "option1", value: "1", displayName: "1" },
      { name: "option2", value: "2", displayName: "2" }
    ];
    this.customSelect = [
      { value: 'one', label: 'one', className: 'select-options-custom' },
      { value: 'two', label: 'two', className: 'select-options-custom' },
      { value: 'three', label: 'three', className: 'select-options-custom' },
      { value: 'four', label: 'four', className: 'select-options-custom' },
      { value: 'five', label: 'five', className: 'select-options-custom' },
      { value: 'six', label: 'six', className: 'select-options-custom' }
    ];
  }

  componentDidMount() {
    // Set all key value pair to have true for all form fields with name.
    let isSettingPristineValue = {};
    _.each((this.formName), (name) => {
      isSettingPristineValue[name] = true;
    });
    // This will store every input as untouched
    this.setState({
      isSettingPristineValue
    });
  }

  onChangeInput(name, value) {
    // If any of the form input change and if it is not the original value
    if(!_.isEqual(this.refs.hello.getPristineValues()[name], value)) {
      let isSettingPristineValue = JSON.parse(JSON.stringify(this.state.isSettingPristineValue));
      isSettingPristineValue[name] = false;
      this.setState({
        isSettingPristineValue,
      });
    }
  }

  onReset() {
    // on clicking reset just update the pristine value of form elements to true so that it will render from the value prop
    let isSettingPristineValue = {};
    _.each((this.formName), (name) => {
      isSettingPristineValue[name] = true;
    });
    this.setState({
      isSettingPristineValue,
    });
  }

  onSubmit() {
    console.log('submitting ', this.refs.hello.getModel());
  }

  render() {
    const dateTime = {
      startDate: moment('25/12/2017 12:00:00 am', 'DD/MM/YYYY hh:mm:ss a'),
      endDate: moment('25/12/2018 12:00:01 am', 'DD/MM/YYYY hh:mm:ss a'),
    };

    return (
      <div>
        <Formsy.Form
          ref="hello"
          onChange={this.onChangeForm}
          noValidate
        >
          <InputText
            name="1"
            label="Textbox:"
            onChangeInput={this.onChangeInput}
            wrapperClass="divs"
            value='abcdef'
            isValuePristine={this.state.isSettingPristineValue[1]}
          />
          <InputSelect
            name="2"
            label="SelectBox:"
            options={this.selectBoxOptions}
            value="2"
            onChangeInput={this.onChangeInput}
            isValuePristine={this.state.isSettingPristineValue[2]}
            value={'2'}
            wrapperClass="divs"
          />
          <InputCheck
            name="3"
            label="Checkbox:"
            displayName="input check"
            onChangeInput={this.onChangeInput}
            isValuePristine={this.state.isSettingPristineValue[3]}
            value={true}
            wrapperClass="divs"
          />
          <InputRadioButtonGroup
            name="4"
            label="Radio button:"
            options={this.radioButtonGroupOptions}
            onChangeInput={this.onChangeInput}
            wrapperClass="divs"
            isValuePristine={this.state.isSettingPristineValue[4]}
            value={'2'}
          />

          <InputSelectCustom
            name="5"
            options = { this.customSelect }
            onChangeInput = { this.onChangeInput }
            className = 'react-select'
            autofocus = {false}
            multi={true}
            isValuePristine={this.state.isSettingPristineValue[5]}
            value={['two', 'three']}
            wrapperClass="select-custom"
            label="React-select"
            labelClass="select-label"
            selectClass="select-class"
          />
          <InputDateTime
            name="6"
            timePicker={true}
            wrapperClass="date-time"
            onChangeInput = { this.onChangeInput }
            isValuePristine={this.state.isSettingPristineValue[6]}
            value={dateTime}
          >
            Select a date
          </InputDateTime>
          <input
            type="button"
            value="Reset to pristine value"
            onClick={this.onReset}
          />
          <button
            type="submit"
            disabled={!this.state.canSubmit}
            onClick={this.onSubmit}
          >
            Submit
          </button>
        </Formsy.Form>
      </div>
    );
  }
}
/*
 * Renders the app with the target container
 */
render(
  <App />,
  document.getElementById('app'));


Any synthetic react events can be passed to the Lib Component as props.

```
## Efficient re rendering.

Every component re renders only when the value of its iternal state changes.
It avoids unnecessary re rendering due to props change of the Formsy library.

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

Download the repository. run npm test.

## Contributors
The whole aim is to keep it simple and more generic. Feel free to suggest improvements.

## License

MIT License
