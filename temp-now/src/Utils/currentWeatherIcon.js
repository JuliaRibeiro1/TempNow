"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const day_rain_png_1 = __importDefault(require("../Assets/day-rain.png"));
const rain_png_1 = __importDefault(require("../Assets/rain.png"));
const sun_png_1 = __importDefault(require("../Assets/sun.png"));
const cloud_png_1 = __importDefault(require("../Assets/cloud.png"));
const snow_png_1 = __importDefault(require("../Assets/snow.png"));
function currentWeatherIcon(temperature, rain, snow) {
    if (snow && snow > 5) {
        return snow_png_1.default;
    }
    else if (rain && rain > 5) {
        if ((temperature * 9) / 5 + 32 > 76) {
            return day_rain_png_1.default;
        }
        else {
            return rain_png_1.default;
        }
    }
    else {
        if ((temperature * 9) / 5 + 32 > 76) {
            return sun_png_1.default;
        }
        else {
            return cloud_png_1.default;
        }
    }
}
exports.default = currentWeatherIcon;
