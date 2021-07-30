import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AccordionCom from '../Components/Atoms/Accordion';
import { Grid, Button } from '@material-ui/core';
import SimpleSnackbar from '../Components/Atoms/Toster';
import { WEB_SOCKET_BASE_URL } from '../Contant';

const HomePage = () => {
//  redux hooks for dispatch actions
  const dispatch = useDispatch();
  const childRef = useRef();
//Socket  connection and joining method 

const connectAndJoin = () => {
  const host = WEB_SOCKET_BASE_URL;
  dispatch(wsConnect(host,fetchTickerHistory));
};
  useEffect(() => {
  connectAndJoin()
  // unmount call
    return ()=>{
      dispatch(wsDisconnect())
    }
  })
//  fetch the data from api
  const fetchTickerHistory = ()=>{
     dispatch(fetch_all_history('ticker'))
  }
// State of ticker from stor
    const tickers = useSelector(state=>state.ticker);
    return (
        <div className="ticker_Grid_wrapper">

        <Grid container  >
  <Grid container item xs={12} sm={6} md={5} lg={4}  className="ticker_section">
    <AccordionCom ticker={tickers} />

  </Grid>
  <Grid container item xs={12} sm={6} md={7} lg={8}  >
    <div style={{margin:"1em"}} >
  <SimpleSnackbar ref={childRef} />
</div>

            {/* <button onClick={()=>dispatch(buycake())}>buy cake</button> */}

  </Grid>
  
</Grid>
</div>
     
    )
}

export default HomePage
