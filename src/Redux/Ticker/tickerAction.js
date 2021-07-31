import {
    FETCH_STOCK_REQUEST,
    FETCH_STOCK_SUCCESS,
    FETCH_STOCK_FAILURE,
    FILTER_STOCK_DATA,
} from './tickerType'
const fetchStockRequest = () => {
    return {
        type: FETCH_STOCK_REQUEST,
    }
}
const fetchStockSuccess = (stock) => {
    return {
        type: FETCH_STOCK_SUCCESS,
        payload: stock,
    }
}

const fetchStockFailure = (error) => {
    return {
        type: FETCH_STOCK_FAILURE,
        payload: error,
    }
}
// input search field data handler
export const searchFilterStockData = (filter_text) => {
    return { type: FILTER_STOCK_DATA, payload: filter_text }
}

// Api call code for fetch all Stock Fetch

export const fetchStock = (notify) => {
    return (dispatch) => {
        dispatch(fetchStockRequest())
        notify.current.openToaster('Loading the stock data')
        fetch('./assets/DummyData.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('HTTP error ' + response.status)
                }
                return response.json()
            })
            .then((result) => {
                dispatch(fetchStockSuccess(result))
                notify.current.openToaster('Successfully Load the Data')
            })
            .catch(function (err) {
                dispatch(fetchStockFailure(err))
                notify.current.openToaster('Error while loading the data')
            })
    }
}
