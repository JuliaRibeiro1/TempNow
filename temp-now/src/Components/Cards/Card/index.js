"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const weather_icon_png_1 = __importDefault(require("../../../Assets/weather-icon.png"));
const Card_module_css_1 = __importDefault(require("./Card.module.css"));
function Card() {
    return (react_1.default.createElement("section", { className: `${Card_module_css_1.default.section} cardBlur` },
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", { className: `${Card_module_css_1.default.cardContainer} center` },
                react_1.default.createElement("div", { className: `${Card_module_css_1.default.date} center` },
                    react_1.default.createElement("div", null, "28"),
                    react_1.default.createElement("div", null, "Seg")),
                react_1.default.createElement("img", { src: weather_icon_png_1.default })),
            react_1.default.createElement("div", { className: Card_module_css_1.default.minMaxContainer },
                react_1.default.createElement("div", null, "M\u00E1xima 11\u00B0"),
                react_1.default.createElement("div", null, "M\u00EDnima 17\u00B0")))));
}
exports.default = Card;
