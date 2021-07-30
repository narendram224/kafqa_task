import { FETCH_ALL_TICKER_SUCCESS, FETCH_ALL_TICKER_FAILURE, FETCH_ALL_TICKER_REQUEST, FETCH_TICKER_HISTORY } from "./tickerType";
import produce from "immer"

// Reducer with initial state
const INITIAL_STATE = {
    /* bunch of todos */
    loading:false,
    tickers:[],
    error:''
}

const tickerReducer = produce((draft=INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ALL_TICKER_REQUEST:
            draft.loading=true;
           return draft;
        case FETCH_TICKER_HISTORY:

            if (action.payload&&action.payload[1]&&action.payload[1].length>0) {
            console.log("the payload is",action.payload[1]);

                 draft.tickers.push([...action.payload[1],'BTC']) 
            }
            return draft;
        case FETCH_ALL_TICKER_FAILURE:
            return draft;
        default:
            return draft;
    }
})

export default tickerReducer;