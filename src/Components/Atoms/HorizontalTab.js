import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import './HorizontalTab.css'
import InputField from './InputField'
import EnhancedTable from './TickerHistoryTable'
import { useSelector, useDispatch } from 'react-redux'
import { searchFilterStockData } from '../../Redux/Ticker/tickerAction'

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    )
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'green',
        boxSizing: 'border-box',
    },
}))

export default function HorizontalTabs() {
    const classes = useStyles()
    const [value, setValue] = React.useState(0)

    const dispatch = useDispatch() // hook which provide dispatch
    const tickers = useSelector((state) => state.ticker) // hook which provide the store state

    // dispatch action of when input fields values changed
    const handleSearchTextChange = (e) => {
        e.preventDefault() // remove the default behavior of event
        dispatch(searchFilterStockData(e.target.value))
    }
    // handling the data of by clicking tabs
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <div className="tab_wrapper">
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
            >
                <Tab label="Trading" {...a11yProps(0)} />
                <Tab label="Top 5 Gainer" {...a11yProps(1)} />
                <Tab label="Top 5 Looser" {...a11yProps(2)} />
            </Tabs>
            {/* </AppBar> */}
            <TabPanel value={value} index={0}>
                <div className="trading_tab_header">
                    <InputField
                        type="text"
                        handleOnChange={handleSearchTextChange}
                        value={tickers.searchTerm}
                    />
                    {/* <SelectOpt /> */}
                </div>
                <section className="trading_tab_main_wrapper">
                    <EnhancedTable
                        rows={tickers.tickers}
                        emptyRow={tickers.stockLoaded}
                    />
                </section>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <EnhancedTable
                    rows={tickers.stockGainer}
                    emptyRow={tickers.stockLoaded}
                />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <EnhancedTable
                    rows={tickers.stockLooser}
                    emptyRow={tickers.stockLoaded}
                />
            </TabPanel>
        </div>
    )
}
