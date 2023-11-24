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
function useFetch(apiUrl) {
    const [loading, setLoading] = react_1.default.useState(false);
    const [error, setError] = react_1.default.useState(null);
    const [data, setData] = react_1.default.useState(null);
    react_1.default.useEffect(() => {
        // Function to make the fetch request
        const fetchData = () => __awaiter(this, void 0, void 0, function* () {
            try {
                // Set loading to true while fetching data
                setLoading(true);
                // Make the fetch request
                const response = yield fetch(apiUrl);
                // Check if the request was successful
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                // Parse the response as JSON and update the state
                const data = yield response.json();
                setData(data);
            }
            catch (error) {
                // Update the error state if an error occurs
                setError("wdw");
            }
            finally {
                // Set loading to false when the request is complete
                setLoading(false);
            }
        });
        // Call the fetchData function
        fetchData();
    }, []);
    return ({
        data,
        loading,
        error
    });
}
exports.default = useFetch;
