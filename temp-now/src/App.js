"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const Header_1 = __importDefault(require("./Components/Header"));
const Board_1 = __importDefault(require("./Components/Board"));
const useFetch_1 = __importDefault(require("./Hooks/useFetch"));
const CardsContainer_1 = __importDefault(require("./Components/Cards/Card/CardsContainer/CardsContainer"));
const currentWeatherVideo_1 = __importDefault(require("./Utils/currentWeatherVideo"));
function App() {
    const { data, dailyData, currentData, temperature } = (0, useFetch_1.default)();
    console.log(data);
    console.log(temperature);
    if (!data && !dailyData) {
        react_1.default.createElement("div", null, "N\u00E3o foi poss\u00EDvel acessar a temperatura");
    }
    else {
        const backgroundVideo = (0, currentWeatherVideo_1.default)(Math.ceil((currentData === null || currentData === void 0 ? void 0 : currentData.rain) || 0), Math.ceil((currentData === null || currentData === void 0 ? void 0 : currentData.snowfall) || 0));
        console.log(backgroundVideo);
        return (react_1.default.createElement("div", { className: "App" },
            react_1.default.createElement("video", { autoPlay: true, muted: true, loop: true, className: "backgroundVideo" },
                react_1.default.createElement("source", { src: backgroundVideo, type: "video/mp4" })),
            react_1.default.createElement("div", { className: 'container' },
                react_1.default.createElement(Header_1.default, null),
                react_1.default.createElement(Board_1.default, { temperature: currentData === null || currentData === void 0 ? void 0 : currentData.temperature_2m, wind: Math.ceil((currentData === null || currentData === void 0 ? void 0 : currentData.windspeed_10m) || 0), rain: Math.ceil((currentData === null || currentData === void 0 ? void 0 : currentData.rain) || 0), snow: Math.ceil((currentData === null || currentData === void 0 ? void 0 : currentData.snowfall) || 0) }),
                react_1.default.createElement(CardsContainer_1.default, { daily: dailyData }))));
    }
}
exports.default = App;
