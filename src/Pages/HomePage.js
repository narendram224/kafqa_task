import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AccordionCom from '../Components/Atoms/Accordion';
import { Grid, Button } from '@material-ui/core';
import SimpleSnackbar from '../Components/Atoms/Toster';
import { fetchStock } from '../Redux/Ticker/tickerAction';

const HomePage = () => {
//  redux hooks for dispatch actions
  const dispatch = useDispatch();
  const childRef = useRef();

//  fetch the data from api

 const  getData = async()=>{
  const res = await fetch('./src/Pages/demo.json');
  const data = await res.json();
  return data;
  // fetch("./demo.json").then(async response => {
  //   try {
  //    const data = await response.json()
  //    console.log('response data?', data)
  //  } catch(error) {
  //    console.log('Error happened here!')
  //    console.error(error)
  //  }
  // })
}
const getDataNew=()=>{
  fetch('./assets/demo1.json'
  ,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  }
  )
    .then(function(response){
      console.log(response)
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    });
}

const fetchTickerHistory = ()=>{
  dispatch(fetchStock())
}
  useEffect(() => {
  // connectAndJoin()
   getDataNew();

  // const nwew = getData();
  // console.log("the asdad",nwew);
  // nwew.then((data)=>{
  //   console.log("the data",data);
    
  // }).catch((e)=>{
  //   console.log("the actual error",e);
    
  // })
  
  fetchTickerHistory();
  // unmount call
 
  },[])

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
