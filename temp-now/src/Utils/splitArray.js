"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function splitArray(array) {
    const days = 3;
    const shares = array.length / days;
    const splitArr = [];
    for (let i = 0; i < array.length; i += shares) {
        const share = array.slice(i, i + shares);
        splitArr.push(share);
    }
    return splitArr;
}
exports.default = splitArray;
