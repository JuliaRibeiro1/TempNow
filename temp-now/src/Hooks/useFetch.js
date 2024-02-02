"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const splitArray_1 = __importDefault(require("../Utils/splitArray"));
function useFetch() {
    const [loading, setLoading] = react_1.default.useState(false);
    const [error, setError] = react_1.default.useState(null);
    const [data, setData] = react_1.default.useState(null);
    const [temperature, setTemperature] = react_1.default.useState([]);
    const [daily, setDaily] = react_1.default.useState(null);
    react_1.default.useEffect(() => {
        const fetchData = () => __awaiter(this, void 0, void 0, function* () {
            try {
                setLoading(true);
                const response = yield fetch("https://api.open-meteo.com/v1/forecast?latitude=-23.5475&longitude=-46.6361&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,rain,snowfall,windspeed_10m,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,rain_sum,snowfall_sum,windspeed_10m_max&timezone=GMT&forecast_days=3&models=best_match");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = yield response.json();
                setData(data);
                setTemperature((0, splitArray_1.default)(data.hourly.temperature_2m));
                setDaily(data.daily);
                console.log(temperature);
                console.log(data);
            }
            catch (error) {
                setError("wdw");
            }
            finally {
                setLoading(false);
            }
        });
        fetchData();
    }, []);
    return ({
        data,
        temperature,
        loading,
        error,
        daily
    });
}
exports.default = useFetch;
