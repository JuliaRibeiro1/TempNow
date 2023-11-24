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
const useFetch_1 = __importDefault(require("./Hooks/useFetch"));
function App() {
    const { data, temperature } = (0, useFetch_1.default)("https://api.open-meteo.com/v1/forecast?latitude=-23.5475&longitude=-46.6361&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,rain,snowfall,windspeed_10m,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,rain_sum,snowfall_sum,windspeed_10m_max&timezone=GMT&forecast_days=3&models=best_match");
    console.log(temperature);
    if (!data) {
    }
    else {
        return (react_1.default.createElement("div", { className: "App" },
            react_1.default.createElement("div", { className: 'container' },
                react_1.default.createElement(Header_1.default, null),
                react_1.default.createElement(Board_1.default, { temperature: temperature[0][0], wind: 20, rain: 20 }),
                react_1.default.createElement(Card_1.default, null))));
    }
}
exports.default = App;
