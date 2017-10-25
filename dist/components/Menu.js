'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_Component) {
  _inherits(Menu, _Component);

  /**
   * React Component constructor.
   * @param props
   */
  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

    _this.onClick = function (option) {
      _this.setState({
        selected: option,
        open: false
      });

      _this.props.onClick(option, _this.state.identifier);
    };

    _this.state = {
      identifier: props.identifier,
      open: props.open,
      options: props.options,
      selected: props.selected
    };
    return _this;
  }

  /**
   * React Component componentWillReceiveProps.
   * @param  {Object} nextProps
   */


  _createClass(Menu, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        identifier: nextProps.identifier,
        open: nextProps.open,
        options: nextProps.options,
        selected: nextProps.selected
      });
    }

    /**
     * OnChange method to set checked state
     * @return {[type]} [description]
     */

  }, {
    key: 'renderOptions',
    value: function renderOptions() {
      var _this2 = this;

      var options = this.state.options.map(function (option, index) {
        return _react2.default.createElement(
          _style.Option,
          { onClick: function onClick() {
              return _this2.onClick(option);
            }, key: index, role: 'button' },
          option.label
        );
      });

      return _react2.default.createElement(
        _style.Options,
        null,
        options
      );
    }

    /**
     * React render.
     * @returns {XML}
     */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _style.MenuTag,
        { open: this.state.open },
        this.renderOptions()
      );
    }
  }]);

  return Menu;
}(_react.Component);

/**
 * Component PropTypes
 * @type {{show: *, overlay: *}}
 */


Menu.propTypes = {
  identifier: _propTypes2.default.string.isRequired,
  open: _propTypes2.default.bool.isRequired,
  options: _propTypes2.default.array.isRequired,
  selected: _propTypes2.default.object
};

exports.default = Menu;