"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Board_module_css_1 = __importDefault(require("./Board.module.css"));
const wind_direction_icon_png_1 = __importDefault(require("../../Assets/wind-direction-icon.png"));
const rain_percentage_png_1 = __importDefault(require("../../Assets/rain-percentage.png"));
const weather_icon_png_1 = __importDefault(require("../../Assets/weather-icon.png"));
const Header_js_1 = __importDefault(require("./Header.js"));
function Board(temperature) {
    return (react_1.default.createElement("section", { className: `${Board_module_css_1.default.currentBoard} blur` },
        react_1.default.createElement(Header_js_1.default, { data: new Date() }),
        react_1.default.createElement("div", { className: Board_module_css_1.default.currentWeatherData },
            react_1.default.createElement("div", null,
                react_1.default.createElement("img", null),
                react_1.default.createElement("div", { className: Board_module_css_1.default.weatherSection },
                    react_1.default.createElement("img", { src: weather_icon_png_1.default }),
                    react_1.default.createElement("div", null, "23"),
                    react_1.default.createElement("span", { className: Board_module_css_1.default.weatherDegree }, "\u00B0c"))),
            react_1.default.createElement("div", { className: Board_module_css_1.default.weatherConditionsSection },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("img", { src: wind_direction_icon_png_1.default }),
                    react_1.default.createElement("div", null, "Wind 10KM")),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("img", { src: rain_percentage_png_1.default }),
                    react_1.default.createElement("div", null, "Chuva 50%"))))));
}
exports.default = Board;
