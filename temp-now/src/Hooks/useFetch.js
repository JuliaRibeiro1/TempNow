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
function useFetch() {
    const [loading, setLoading] = react_1.default.useState(false);
    const [error, setError] = react_1.default.useState(null);
    const [dailyData, setDailyData] = react_1.default.useState(null);
    const [currentData, setCurrentData] = react_1.default.useState(null);
    const [temperature, setTemperature] = react_1.default.useState();
    const [data, setData] = react_1.default.useState(null);
    react_1.default.useEffect(() => {
        const fetchData = () => __awaiter(this, void 0, void 0, function* () {
            try {
                setLoading(true);
                const response = yield fetch("https://api.open-meteo.com/v1/forecast?latitude=-23.5475&longitude=-46.6361&current=temperature_2m,rain,snowfall,wind_speed_10m&hourly=is_day&daily=temperature_2m_max,temperature_2m_min&temperature_unit=celsius&timezone=GMT&forecast_days=3&models=best_match");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const dataResult = yield response.json();
                setData(dataResult);
                setDailyData(dataResult.daily);
                setCurrentData(dataResult.current);
                setTemperature(data === null || data === void 0 ? void 0 : data.current.temperature_2m);
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
        dailyData,
        currentData
    });
}
exports.default = useFetch;
