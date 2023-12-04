"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ceilArray(array) {
    const share = [];
    array.map(number => {
        share.push(Math.ceil(number));
    });
    console.log(share);
    return share;
}
exports.default = ceilArray;
