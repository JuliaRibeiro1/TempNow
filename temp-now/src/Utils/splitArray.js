"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ceilArray_1 = __importDefault(require("./ceilArray"));
function splitArray(array) {
    const days = 3;
    const shares = array.length / days;
    const splitArr = [];
    for (let i = 0; i < array.length; i += shares) {
        const share = array.slice(i, i + shares);
        splitArr.push((0, ceilArray_1.default)(share));
    }
    return splitArr;
}
exports.default = splitArray;
