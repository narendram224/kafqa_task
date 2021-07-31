import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AccordionCom from '../Components/Atoms/Accordion'
import { Grid } from '@material-ui/core'
import SimpleSnackbar from '../Components/Atoms/Toster'
import { fetchStock } from '../Redux/Ticker/tickerAction'

const HomePage = () => {
    //  redux hooks that gives dispatch actions
    const dispatch = useDispatch()
    const childRef = useRef() //making ref for child ref

    //  fetch the data from api
    const fetchTickerHistory = () => {
        dispatch(fetchStock(childRef))
    }
    useEffect(() => {
        fetchTickerHistory()
        // unmount call
    }, [])

    // State of ticker from store
    const tickers = useSelector((state) => state.ticker)
    return (
        <div className="ticker_Grid_wrapper">
            <Grid container>
                <Grid
                    container
                    item
                    xs={12}
                    sm={6}
                    md={8}
                    lg={10}
                    className="ticker_section"
                >
                    <AccordionCom ticker={tickers} />
                </Grid>
                <Grid container item xs={12} sm={6} md={4} lg={2}>
                    <div style={{ margin: '1em' }}>
                        <SimpleSnackbar ref={childRef} />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomePage
