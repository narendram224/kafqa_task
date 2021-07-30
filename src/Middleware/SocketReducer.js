export const wsConnect = (host,cb) => ({ type: 'WS_CONNECT', host,cb });
export const wsConnecting = host => ({ type: 'WS_CONNECTING', host });
export const wsConnected = host => ({ type: 'WS_CONNECTED', host });
export const wsDisconnect = host => ({ type: 'WS_DISCONNECT', host });
export const wsDisconnected = host => ({ type: 'WS_DISCONNECTED', host });
export const fetch_all_history = (channel,symbol) => ({ type: 'FETCH_ALL_HISTORY',channel,symbol});


const websocketInitialState = {
    isSocketConnected: false,
};

export const websocketReducer = (state = { ...websocketInitialState }, action) => {
  switch (action.type) {
    case 'WS_CONNECT':
      return { ...state, host: action.host ,cb:action.cb};
    case 'WS_CONNECTED':
        return { ...state,isSocketConnected:true, host: action.host,}
    case 'FETCH_ALL_HISTORY':
        return {...state, }
    case 'WS_DISCONNECT':

        return {...state,host: action.host}
    default:
      return state;
  }
};