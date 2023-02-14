import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import {persistor, store} from './reducer/store';
import {Provider} from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

