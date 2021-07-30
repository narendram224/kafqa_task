import * as actions from './SocketReducer';
import { fetchTickerHistoryData } from '../Redux/Ticker/tickerAction';

const socketMiddleware = () => {
  let socket = null;

  const onOpen = (store,cb) => (event) => {
    store.dispatch(actions.wsConnected(event.target.url));
    cb();
  };

  const onClose = store => () => {
    store.dispatch(actions.wsDisconnected());
  };

  const onMessage = store => (event) => {
    const payload = JSON.parse(event.data);
    switch (event.type) {
      case 'message':
        store.dispatch(fetchTickerHistoryData(payload));
        break;
      default:
        console.log(payload);
        break;
    }
  };

  return store => next => (action) => {
    switch (action.type) {
      case 'WS_CONNECT':
        if (socket !== null) {
          socket.close();
        }

        // connect to the remote host
        socket = new WebSocket(action.host);
        // websocket handlers
        socket.onmessage = onMessage(store);
        socket.onclose = onClose(store);
        socket.onopen = onOpen(store,action.cb);

        break;
      case 'WS_DISCONNECT':
        if (socket !== null) {
          socket.close();
        }
        socket = null;
        break;
      
      case 'FETCH_ALL_HISTORY':
          console.log("the action for fetch ticker history",action.channel,action.symbol);
        socket.send(JSON.stringify({ 
      event: 'subscribe', 
      channel:action.channel, 
      symbol:action.symbol 
    }));
        break;
    
      default:
        return next(action);
    }
  };
};

export default socketMiddleware();