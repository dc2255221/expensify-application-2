import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // allows us to provide the store to all of our components that make up app.
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

// import './index.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import './firebase/firebase';

const store = configureStore();

const jsx = (
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(jsx, document.getElementById('app'));

