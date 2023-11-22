"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header_module_css_1 = __importDefault(require("./Header.module.css"));
function Header({ data }) {
    return (react_1.default.createElement("header", { className: Header_module_css_1.default.header },
        react_1.default.createElement("h2", { className: Header_module_css_1.default.date }, data.toDateString()),
        react_1.default.createElement("h3", { className: Header_module_css_1.default.day }, "Domingo")));
}
exports.default = Header;
