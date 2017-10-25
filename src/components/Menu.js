import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MenuTag, Options, Option } from './style';

class Menu extends Component {
  /**
   * React Component constructor.
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {
      identifier: props.identifier,
      open: props.open,
      options: props.options,
      selected: props.selected,
    };
  }

  /**
   * React Component componentWillReceiveProps.
   * @param  {Object} nextProps
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      identifier: nextProps.identifier,
      open: nextProps.open,
      options: nextProps.options,
      selected: nextProps.selected,
    });
  }

  /**
   * OnChange method to set checked state
   * @return {[type]} [description]
   */
  onClick = (option) => {
    this.setState({
      selected: option,
      open: false
    });

    this.props.onClick(option, this.state.identifier);
  }

  renderOptions() {
    const options = this.state.options.map((option, index) => {
      return (
        <Option onClick={() => this.onClick(option)} key={index} role="button">
          {option.label}
        </Option>
      )
    });

    return (
      <Options>
        {options}
      </Options>
    );
  }

  /**
   * React render.
   * @returns {XML}
   */
  render() {
    return (
      <MenuTag open={this.state.open}>
        {this.renderOptions()}
      </MenuTag>
    );
  }
}

/**
 * Component PropTypes
 * @type {{show: *, overlay: *}}
 */
Menu.propTypes = {
  identifier: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  options: PropTypes.array.isRequired,
  selected: PropTypes.object
};

export default Menu;
