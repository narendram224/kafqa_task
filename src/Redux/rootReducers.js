import { combineReducers } from "redux";
import tickerReducer from "./Ticker/tickerReducer";
import { websocketReducer } from "../Middleware/SocketReducer";

 const rootReducers = combineReducers({
    ticker:tickerReducer,
    websocket: websocketReducer,
});
export default rootReducers;