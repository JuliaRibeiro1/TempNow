"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Card_1 = __importDefault(require("../Card"));
const CardsContainer_module_css_1 = __importDefault(require("./CardsContainer.module.css"));
function CardsContainer({ daily }) {
    const cardElements = [];
    if (daily && daily.time) {
        console.log(daily);
        for (let i = 1; i < daily.time.length; i++) {
            console.log(i);
            cardElements.push(react_1.default.createElement(Card_1.default, { key: i, daily: daily, currentCardIndex: i }));
        }
    }
    return react_1.default.createElement("div", { className: CardsContainer_module_css_1.default.cardsContainer }, cardElements);
}
exports.default = CardsContainer;
