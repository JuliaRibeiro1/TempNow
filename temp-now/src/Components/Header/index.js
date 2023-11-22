"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const logo_png_1 = __importDefault(require("../../Assets/logo.png"));
const location_icon_png_1 = __importDefault(require("../../Assets/location-icon.png"));
const Header_module_css_1 = __importDefault(require("../Header/Header.module.css"));
const DegreeBtn_1 = __importDefault(require("../DegreeBtn"));
function Header() {
    return (react_1.default.createElement("header", { className: Header_module_css_1.default.header },
        react_1.default.createElement("img", { src: logo_png_1.default }),
        react_1.default.createElement("div", { className: "center" },
            react_1.default.createElement("p", { className: `${Header_module_css_1.default.location} blur` },
                "Avenida Paulista,  1123 - S\u00E3o Paulo/SP",
                react_1.default.createElement("span", null,
                    react_1.default.createElement("img", { className: Header_module_css_1.default.locationIcon, src: location_icon_png_1.default }))),
            react_1.default.createElement(DegreeBtn_1.default, null))));
}
exports.default = Header;
