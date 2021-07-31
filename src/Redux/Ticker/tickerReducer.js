import {
    FETCH_STOCK_REQUEST,
    FETCH_STOCK_SUCCESS,
    FETCH_STOCK_FAILURE,
    FILTER_STOCK_DATA,
} from './tickerType'
import produce from 'immer'

// Reducer with initial state
const INITIAL_STATE = {
    /* bunch of todos */
    loading: false,
    tickers: [],
    searchTerm: '',
    tempStockArray: [],
    stockGainer: [],
    stockLooser: [],
    stockLoaded: false,
    error: '',
}

const tickerReducer = produce((draft = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_STOCK_REQUEST:
            draft.loading = true
            draft.error = ''
            return draft
        case FETCH_STOCK_SUCCESS:
            if (Array.isArray(action.payload) && action.payload.length > 0) {
                // draft.tickers = action.payload
                // draft.stockLoaded = true
                draft.tempStockArray = action.payload
                draft.stockGainer = calculateProfit(action.payload)
                draft.stockLooser = calculateLoosers(action.payload)
            }

            return draft
        case FETCH_STOCK_FAILURE:
            draft.loading = false
            draft.error = action.payload
            draft.ticker = []
            return draft
        case FILTER_STOCK_DATA:
            // let tempStockArr = draft.tickers;
            draft.searchTerm = action.payload
            const filteredArray = action.payload
                ? draft.tempStockArray.filter((item) =>
                      item.symbol
                          .toLowerCase()
                          .includes(action.payload.toLowerCase())
                  )
                : draft.tempStockArray
            console.log('filtered', filteredArray)

            draft.tickers = filteredArray
            return draft
        default:
            return draft
    }
})

function calculateProfit(stockArr) {
    if (Array.isArray(stockArr) && stockArr.length > 0) {
        let topValues = [...stockArr]
            .sort((a, b) => b['ptsC'] - a['ptsC'])
            .slice(0, 5)
        return topValues
    } else {
        return []
    }
}
function calculateLoosers(stockArr) {
    if (Array.isArray(stockArr) && stockArr.length > 0) {
        let topValues = [...stockArr]
            .sort((a, b) => a['ptsC'] - b['ptsC'])
            .slice(0, 5)
        return topValues
    } else {
        return []
    }
}
function getParserData(objects) {
    let arr = objects
    for (var i = 0; i < arr.length; i++) {
        var obj = arr[i]
        for (var prop in obj) {
            if (
                obj.hasOwnProperty(prop) &&
                obj[prop] !== null &&
                prop !== 'symbol'
            ) {
                obj[prop] = parseFloat(obj[prop].replace(/,/g, ''))
            }
        }
    }
    return arr
}
export default tickerReducer
