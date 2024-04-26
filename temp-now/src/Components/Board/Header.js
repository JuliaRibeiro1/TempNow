"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header_module_css_1 = __importDefault(require("./Header.module.css"));
const getDayWeek_1 = __importDefault(require("../../Utils/getDayWeek"));
function Header({ data }) {
    const formatModel = { year: 'numeric', month: 'long', day: 'numeric' };
    const brazilianFormat = new Intl.DateTimeFormat('pt-BR', formatModel);
    const dayWeek = data.getDay();
    const { day } = (0, getDayWeek_1.default)(dayWeek);
    const dataFormatada = brazilianFormat.format(data);
    console.log(data);
    return (react_1.default.createElement("header", { className: Header_module_css_1.default.header },
        react_1.default.createElement("h2", { className: Header_module_css_1.default.date }, dataFormatada),
        react_1.default.createElement("h3", { className: Header_module_css_1.default.day }, day)));
}
exports.default = Header;
