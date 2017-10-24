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
      options: props.options,
      selected: props.selected,
      open: props.open
    };
  }

  /**
   * React Component componentWillReceiveProps.
   * @param  {Object} nextProps
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      options: nextProps.options,
      selected: nextProps.selected,
      open: nextProps.open
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

    this.props.onClick(option);
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
  open: PropTypes.bool.isRequired,
  options: PropTypes.array.isRequired,
  selected: PropTypes.object
};

export default Menu;
