"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clouds_mp4_1 = __importDefault(require("../Assets/clouds.mp4"));
const snowVideo_mp4_1 = __importDefault(require("../Assets/snowVideo.mp4"));
const rainVideo_mp4_1 = __importDefault(require("../Assets/rainVideo.mp4"));
function currentWeatherVideo(snow, rain) {
    if (snow && snow > 5) {
        return rainVideo_mp4_1.default;
    }
    else if (rain && rain > 5) {
        return snowVideo_mp4_1.default;
    }
    else {
        return clouds_mp4_1.default;
    }
}
exports.default = currentWeatherVideo;
