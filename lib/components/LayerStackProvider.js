'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _LayerStore = require('./../LayerStore');var _LayerStore2 = _interopRequireDefault(_LayerStore);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

LayerStackProvider = function (_Component) {_inherits(LayerStackProvider, _Component);function LayerStackProvider() {_classCallCheck(this, LayerStackProvider);return _possibleConstructorReturn(this, (LayerStackProvider.__proto__ || Object.getPrototypeOf(LayerStackProvider)).apply(this, arguments));}_createClass(LayerStackProvider, [{ key: 'getChildContext', value: function getChildContext()
    {
      return {
        layerStore: new _LayerStore2.default() };

    } }, { key: 'render', value: function render()

    {
      return _react.Children.only(this.props.children);
    } }]);return LayerStackProvider;}(_react.Component);exports.default = LayerStackProvider;


LayerStackProvider.childContextTypes = {
  layerStore: _propTypes2.default.object };
//# sourceMappingURL=LayerStackProvider.js.map