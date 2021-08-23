import React from 'react';
import ReactDOM from 'react-dom';
import Home from './page/home';
import {AppProvider} from './component/context';
import App from './app'


ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
        <App/>
    </AppProvider>
   
  </React.StrictMode>,
  document.getElementById('root')
);



