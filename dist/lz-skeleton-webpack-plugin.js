(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('html-webpack-plugin')) :
  typeof define === 'function' && define.amd ? define(['html-webpack-plugin'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.skeletonWebpackPlugin = factory(global.HtmlWebpackPlugin));
}(this, (function (HtmlWebpackPlugin) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var SkeletonPlugin = /*#__PURE__*/function () {
    function SkeletonPlugin(params) {
      _classCallCheck(this, SkeletonPlugin);
      this.rootId = void 0;
      this.title = void 0;
      this.domStr = void 0;
      this.rootId = (params === null || params === void 0 ? void 0 : params.rootId) || 'root';
      this.title = (params === null || params === void 0 ? void 0 : params.title) || '正在进入中...';
      var template = "\n        <style>\n            html, body{\n                margin: 0;\n                padding: 0;\n            }\n            .root{\n                width: 100vw;\n                min-height: 100vh;\n                display: flex;\n                flex-direction: column;\n                justify-content:center;\n                align-items:center;\n            }\n            .spinner{\n                width: 30px;\n                height: 30px;\n                position: relative;\n            }\n            .enter{\n                font-size: 14px;\n                color: #000000;\n                margin-top: 35px;\n                display: flex;\n                align-items: center;\n            }\n            .spinner .spinner-container {\n                position: absolute;\n                width: 100%;\n                height: 100%;\n            }\n            .spinner-container div {\n                width: 6px;\n                height: 6px;\n                background-color: #fe305d;\n                border-radius: 100%;\n                position: absolute;\n                -webkit-animation: bouncedelay 1.2s infinite ease-in-out;\n                animation: bouncedelay 1.2s infinite ease-in-out;\n                -webkit-animation-fill-mode: both;\n                animation-fill-mode: both;\n            }\n            .container2 {\n                -webkit-transform: rotateZ(45deg);\n                transform: rotateZ(45deg);\n            }\n            .container3 {\n                -webkit-transform: rotateZ(90deg);\n                transform: rotateZ(90deg);\n            } \n            .circle1 { top: 0; left: 0; }\n            .circle2 { top: 0; right: 0; }\n            .circle3 { right: 0; bottom: 0; }\n            .circle4 { left: 0; bottom: 0; }\n               \n            .container2 .circle1 {\n              -webkit-animation-delay: -1.1s;\n              animation-delay: -1.1s;\n            }\n               \n            .container3 .circle1 {\n            -webkit-animation-delay: -1.0s;\n            animation-delay: -1.0s;\n            }\n               \n            .container1 .circle2 {\n                -webkit-animation-delay: -0.9s;\n                animation-delay: -0.9s;\n            }\n            \n            .container2 .circle2 {\n                -webkit-animation-delay: -0.8s;\n                animation-delay: -0.8s;\n            }\n               \n            .container3 .circle2 {\n                -webkit-animation-delay: -0.7s;\n                animation-delay: -0.7s;\n            }\n               \n            .container1 .circle3 {\n                -webkit-animation-delay: -0.6s;\n                animation-delay: -0.6s;\n            }\n               \n            .container2 .circle3 {\n                -webkit-animation-delay: -0.5s;\n                animation-delay: -0.5s;\n            }\n            \n            .container3 .circle3 {\n                -webkit-animation-delay: -0.4s;\n                animation-delay: -0.4s;\n            }\n            \n            .container1 .circle4 {\n                -webkit-animation-delay: -0.3s;\n                animation-delay: -0.3s;\n            }\n            \n            .container2 .circle4 {\n                -webkit-animation-delay: -0.2s;\n                animation-delay: -0.2s;\n            }\n            \n            .container3 .circle4 {\n                -webkit-animation-delay: -0.1s;\n                animation-delay: -0.1s;\n            }\n            \n            @-webkit-keyframes bouncedelay {\n                0%, 80%, 100% { -webkit-transform: scale(0.0) }\n                40% { -webkit-transform: scale(1.0) }\n            }\n\n            @keyframes bouncedelay {\n                0%, 80%, 100% {\n                    transform: scale(0.0);\n                    -webkit-transform: scale(0.0);\n                } 40% {\n                    transform: scale(1.0);\n                    -webkit-transform: scale(1.0);\n                }\n            }            \n        </style>\n        <div id=\"".concat(this.rootId, "\">\n          <div class=\"root\">\n            <div class=\"spinner\">\n                <div class=\"spinner-container container1\">\n                    <div class=\"circle1\"></div>\n                    <div class=\"circle2\"></div>\n                    <div class=\"circle3\"></div>\n                    <div class=\"circle4\"></div>\n                </div>\n                <div class=\"spinner-container container2\">\n                    <div class=\"circle1\"></div>\n                    <div class=\"circle2\"></div>\n                    <div class=\"circle3\"></div>\n                    <div class=\"circle4\"></div>\n                </div>\n                <div class=\"spinner-container container3\">\n                    <div class=\"circle1\"></div>\n                    <div class=\"circle2\"></div>\n                    <div class=\"circle3\"></div>\n                    <div class=\"circle4\"></div>\n                </div>\n            </div>\n            <p class=\"enter\">").concat(this.title, "</>\n          </div>  \n        </div>");
      this.domStr = (params === null || params === void 0 ? void 0 : params.domStr) || template;
    }
    _createClass(SkeletonPlugin, [{
      key: "apply",
      value: function apply(compiler) {
        var _this = this;
        compiler.hooks.compilation.tap('SkeletonPlugin', function (compilation) {
          HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync('SkeletonPlugin', function (htmlData, callback) {
            htmlData.html = htmlData.html.replace("<div id=\"".concat(_this.rootId, "\"></div>"), _this.domStr);
            callback(null, htmlData);
          });
        });
      }
    }]);
    return SkeletonPlugin;
  }();

  return SkeletonPlugin;

})));
