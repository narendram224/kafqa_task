
import { FETCH_STOCK_REQUEST, FETCH_STOCK_SUCCESS, FETCH_STOCK_FAILURE, FILTER_STOCK_DATA } from "./tickerType"
import { BASE_URL } from "../../Constants/Constant"
 const fetchStockRequest = ()=>{
    return {
        type:FETCH_STOCK_REQUEST
    }
}
 const fetchStockSuccess = stock=>{
        return {
            type:FETCH_STOCK_SUCCESS,
            payload:stock
        }
}   

 const fetchStockFailure = error=>{
    return {
        type:FETCH_STOCK_FAILURE,
        payload:error
    }
}
export const searchFilterStockData =(filter_text)=>{
  return {type:FILTER_STOCK_DATA, payload:filter_text}
}

export const fetchStock = ()=>{
    let myHeaders = new Headers();
    myHeaders.append('Access-Control-Allow-Origin', '*');
    // myHeaders.append('Content-Type', 'application/json');

    return (dispatch)=>{
            dispatch(fetchStockRequest());
            fetch('./assets/DummyData.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP error " + response.status);
                }
                return response.json();
            })
            .then(result => {
                dispatch(fetchStockSuccess(result))
            })
            .catch(function (err) {
              dispatch(fetchStockFailure(err))
            })
    }
}

// Api call code for fetch all tickers 

