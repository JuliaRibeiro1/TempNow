"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const weather_icon_png_1 = __importDefault(require("../../../Assets/weather-icon.png"));
const Card_module_css_1 = __importDefault(require("./Card.module.css"));
const getDayWeek_js_1 = __importDefault(require("../../../Utils/getDayWeek.js"));
function Card({ daily, currentCardIndex }) {
    if (daily) {
        const dateConvert = new Date(daily.time[currentCardIndex]);
        const dayWeek = dateConvert.getDay();
        const { dayInitials } = (0, getDayWeek_js_1.default)(dayWeek);
        return (react_1.default.createElement("section", { className: `${Card_module_css_1.default.section} cardBlur` },
            react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: `${Card_module_css_1.default.cardContainer} center` },
                    react_1.default.createElement("div", { className: `${Card_module_css_1.default.date} center` },
                        react_1.default.createElement("div", null, dateConvert.getDate() < 9 ? "0" + dateConvert.getDate() : dateConvert.getDate()),
                        react_1.default.createElement("div", null, dayInitials)),
                    react_1.default.createElement("img", { src: weather_icon_png_1.default })),
                react_1.default.createElement("div", { className: Card_module_css_1.default.minMaxContainer },
                    react_1.default.createElement("div", null, `Máxima ${Math.ceil(daily.temperature_2m_max[currentCardIndex])}`),
                    react_1.default.createElement("div", null, `Mínima° ${Math.ceil(daily.temperature_2m_min[currentCardIndex])}`)))));
    }
}
exports.default = Card;
