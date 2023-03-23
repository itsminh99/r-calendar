"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TimeContent = /*#__PURE__*/function (_PureComponent) {
  _inherits(TimeContent, _PureComponent);

  var _super = _createSuper(TimeContent);

  function TimeContent(props, context) {
    var _this;

    _classCallCheck(this, TimeContent);

    _this = _super.call(this, props, context); // this.state = {
    //   changes: false,
    //   value: this.formatDate(props),
    // };

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (value, unit) {
      return function () {
        _this.props.update(value, unit);
      };
    });

    return _this;
  } // componentDidMount() {
  //   if (this.closest_interval.current) {
  //     this.closest_interval.current.scrollIntoView();
  //   }
  // }
  // componentDidUpdate(prevProps) {
  //   const { value } = prevProps;
  //   if (!isEqual(value, this.props.value)) {
  //     this.setState({ value: this.formatDate(this.props) });
  //   }
  // }
  // formatDate({ value, dateDisplayFormat, dateOptions }) {
  //   if (value && isValid(value)) {
  //     return format(value, dateDisplayFormat, dateOptions);
  //   }
  //   return '';
  // }


  _createClass(TimeContent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          max = _this$props.max,
          unit = _this$props.unit,
          value = _this$props.value;
      return /*#__PURE__*/_react.default.createElement("ul", {
        className: (0, _classnames.default)('rdrTimeContent')
      }, Array.from(new Array(max + 1)).map(function (_, index) {
        return /*#__PURE__*/_react.default.createElement("li", {
          key: index,
          className: index === value ? 'active' : '',
          onClick: _this2.handleClick(index, unit)
        }, "".concat(index < 10 ? '0' : '').concat(index));
      }));
    }
  }]);

  return TimeContent;
}(_react.PureComponent);

TimeContent.propTypes = {
  value: _propTypes.default.number,
  max: _propTypes.default.number.isRequired,
  disabled: _propTypes.default.bool,
  update: _propTypes.default.func,
  unit: _propTypes.default.oneOf(['hour', 'minute'])
};
TimeContent.defaultProps = {
  value: 0,
  disabled: false
};
var _default = TimeContent;
exports.default = _default;