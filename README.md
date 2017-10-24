# react-md-menu

React Component Material Design Menu.

## Installation

    $ yarn add react-md-menu

## Example
```javascript
import Menu from 'react-md-menu';

<Menu
  open={this.state.open}
  options={this.state.options}
  onClick={this.onClick}
/>
```

## Props

Name | Description | Default/Required | Type
------|-------------|----------|-----------
open | Open/Close | required | bool
options | Array of objects. `label` and `value` is required. | required | object
