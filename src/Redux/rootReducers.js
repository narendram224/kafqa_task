import { combineReducers } from "redux";
import tickerReducer from "./Ticker/tickerReducer";

 const rootReducers = combineReducers({
    ticker:tickerReducer,
});
export default rootReducers;