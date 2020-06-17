"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toCssClass = toCssClass;
exports.VERTICAL = exports.HORIZONTAL = void 0;
var HORIZONTAL = 'HORIZONTAL';
exports.HORIZONTAL = HORIZONTAL;
var VERTICAL = 'VERTICAL';
exports.VERTICAL = VERTICAL;

function toCssClass(constant) {
  return constant.toLowerCase();
}