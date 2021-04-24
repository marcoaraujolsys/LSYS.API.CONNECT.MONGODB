
//import React, { createContext, useState, useContext } from 'react';
import React from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Cliente from './listaCliente';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/cliente" component={Cliente} />
        </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
