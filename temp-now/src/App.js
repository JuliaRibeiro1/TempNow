"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const Card_1 = __importDefault(require("./Components/Cards/Card"));
const Header_1 = __importDefault(require("./Components/Header"));
const Board_1 = __importDefault(require("./Components/Board"));
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement("div", { className: 'container' },
            react_1.default.createElement(Header_1.default, null),
            react_1.default.createElement(Board_1.default, { temperature: 16, wind: 20, rain: 20 }),
            react_1.default.createElement(Card_1.default, null))));
}
exports.default = App;
