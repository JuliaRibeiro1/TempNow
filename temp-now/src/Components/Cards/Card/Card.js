"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Card_module_css_1 = __importDefault(require("./Card.module.css"));
const getDayWeek_js_1 = __importDefault(require("../../../Utils/getDayWeek.js"));
const currentWeatherIcon_1 = __importDefault(require("../../../Utils/currentWeatherIcon"));
function Card({ daily, currentCardIndex }) {
    if (daily) {
        const dateConvert = new Date(daily.time[currentCardIndex]);
        const day = (dateConvert.getDate()) + 1;
        const dayWeek = (dateConvert.getDay()) + 1 > 6 ? 0 : (dateConvert.getDay()) + 1;
        const img = (0, currentWeatherIcon_1.default)(daily.temperature_2m_max[currentCardIndex]);
        const { dayInitials } = (0, getDayWeek_js_1.default)(dayWeek);
        return (react_1.default.createElement("section", { className: `${Card_module_css_1.default.section} cardBlur` },
            react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: `${Card_module_css_1.default.cardContainer} center` },
                    react_1.default.createElement("div", { className: `${Card_module_css_1.default.date} center` },
                        react_1.default.createElement("div", null, day < 9 ? "0" + day : day),
                        react_1.default.createElement("div", null, dayInitials ? dayInitials : "Domingo")),
                    react_1.default.createElement("img", { src: img })),
                react_1.default.createElement("div", { className: Card_module_css_1.default.minMaxContainer },
                    react_1.default.createElement("div", null, `Máxima ${Math.ceil(daily.temperature_2m_max[currentCardIndex])}°`),
                    react_1.default.createElement("div", null, `Mínima ${Math.ceil(daily.temperature_2m_min[currentCardIndex])}°`)))));
    }
}
exports.default = Card;
