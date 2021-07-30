import {FETCH_ALL_TICKER_FAILURE, FETCH_ALL_TICKER_SUCCESS, FETCH_ALL_TICKER_REQUEST,FETCH_TICKER_HISTORY } from "./tickerType"

 
export const fetchTickerHistoryData = (payload)=>{
    return {
        type:FETCH_TICKER_HISTORY,
        payload
    }
}

// Api call code for fetch all tickers 

