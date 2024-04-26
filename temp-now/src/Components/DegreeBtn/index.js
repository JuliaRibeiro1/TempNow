"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const DegreeBtn_module_css_1 = __importDefault(require("./DegreeBtn.module.css"));
function DegreeBtn() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("label", { className: DegreeBtn_module_css_1.default.switch, htmlFor: "checkbox" },
            react_1.default.createElement("input", { type: "checkbox", id: "checkbox", checked: true }),
            react_1.default.createElement("div", { className: `${DegreeBtn_module_css_1.default.round} ${DegreeBtn_module_css_1.default.slider} center` },
                react_1.default.createElement("div", null, "\u00B0C"),
                react_1.default.createElement("div", null, "F")))));
}
exports.default = DegreeBtn;
