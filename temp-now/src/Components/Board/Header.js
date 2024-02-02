"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header_module_css_1 = __importDefault(require("./Header.module.css"));
function Header({ data }) {
    const opcoesDeFormato = { year: 'numeric', month: 'long', day: 'numeric' };
    const formatoBrasileiro = new Intl.DateTimeFormat('pt-BR', opcoesDeFormato);
    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const dataFormatada = formatoBrasileiro.format(data);
    console.log(data);
    return (react_1.default.createElement("header", { className: Header_module_css_1.default.header },
        react_1.default.createElement("h2", { className: Header_module_css_1.default.date }, dataFormatada),
        react_1.default.createElement("h3", { className: Header_module_css_1.default.day }, diasDaSemana[data.getDay()])));
}
exports.default = Header;
