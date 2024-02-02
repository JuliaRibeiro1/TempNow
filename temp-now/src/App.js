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
const background_mp4_1 = __importDefault(require("./Assets/background.mp4"));
function App() {
    const { data, daily, temperature } = (0, useFetch_1.default)();
    console.log(temperature);
    if (!data && !daily) {
    }
    else {
        return (react_1.default.createElement("div", { className: "App" },
            react_1.default.createElement("video", { autoPlay: true, muted: true, loop: true, className: "backgroundVideo" },
                react_1.default.createElement("source", { src: background_mp4_1.default, type: "video/mp4" })),
            react_1.default.createElement("div", { className: 'container' },
                react_1.default.createElement(Header_1.default, null),
                react_1.default.createElement(Board_1.default, { temperature: temperature[0][0], wind: 20, rain: 20 }),
                react_1.default.createElement(CardsContainer_1.default, { daily: daily }))));
    }
}
exports.default = App;
