import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
// import App from './CRUD2/App';
import App from './Ecommerce/App';
import {store,persistor} from './Ecommerce/Redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
   <PersistGate persistor={persistor}>
     <App />
     </PersistGate>
  </Provider>
  
);


