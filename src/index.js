import React from 'react';
import { Provider } from 'react-redux'
import { store } from './redux'
import Routes from './routes'
import './config/StatusBarConfig'
export default () => {
    return (
      <Provider store={store} >
        <Routes />
      </Provider>
    );
}
