'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Option = exports.Options = exports.MenuTag = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: ', ';\n  position: fixed;\n  overflow: hidden;\n  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 -1px 1px -1px rgba(0,0,0,.12);\n  border-radius: 2px;\n  max-height: 250px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  z-index: 999;\n'], ['\n  display: ', ';\n  position: fixed;\n  overflow: hidden;\n  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 -1px 1px -1px rgba(0,0,0,.12);\n  border-radius: 2px;\n  max-height: 250px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  z-index: 999;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n  overflow: hidden;\n  background-color: #FFFFFF;\n'], ['\n  position: relative;\n  overflow: hidden;\n  background-color: #FFFFFF;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  color: #212121;\n  padding: 10px 25px 10px 15px;\n  position: relative;\n  overflow: hidden;\n  &:hover {\n    background-color: #dadada;\n    cursor: pointer;\n  }\n  &:after {\n    content: "";\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    pointer-events: none;\n    background-image: radial-gradient(circle, #000 10%, transparent 10.01%);\n    background-repeat: no-repeat;\n    background-position: 50%;\n    transform: scale(10,10);\n    opacity: 0;\n    transition: transform .5s, opacity 1s;\n  }\n  &:active:after {\n    transform: scale(0,0);\n    opacity: .2;\n    transition: 0s;\n  }\n'], ['\n  color: #212121;\n  padding: 10px 25px 10px 15px;\n  position: relative;\n  overflow: hidden;\n  &:hover {\n    background-color: #dadada;\n    cursor: pointer;\n  }\n  &:after {\n    content: "";\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    pointer-events: none;\n    background-image: radial-gradient(circle, #000 10%, transparent 10.01%);\n    background-repeat: no-repeat;\n    background-position: 50%;\n    transform: scale(10,10);\n    opacity: 0;\n    transition: transform .5s, opacity 1s;\n  }\n  &:active:after {\n    transform: scale(0,0);\n    opacity: .2;\n    transition: 0s;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MenuTag = exports.MenuTag = _styledComponents2.default.div(_templateObject, function (props) {
  return props.open ? 'inline-block' : 'none';
});

var Options = exports.Options = _styledComponents2.default.div(_templateObject2);

var Option = exports.Option = _styledComponents2.default.div(_templateObject3);