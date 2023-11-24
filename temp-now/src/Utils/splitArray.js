"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function splitArray(array) {
    const shares = array.length / 24;
    const splitArr = [];
    for (let i = 0; i < array.length; i += shares) {
        const parte = array.slice(i, i + shares);
        splitArr.push(parte);
    }
    return splitArr;
}
exports.default = splitArray;
