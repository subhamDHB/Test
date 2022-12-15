// import thunk from 'redux-thunk'

// import {legacy_createStore as createStore} from "redux";
// import {applyMiddleware} from "redux";
// import rootReducer from './reducers/index'
// export const store = createStore(rootReducer,applyMiddleware(thunk));

import {legacy_createStore as createStore} from "redux";
import rootReducer from './reducers/index';
import { persistStore,persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {applyMiddleware,compose} from "redux";
import thunk from 'redux-thunk'
const persistConfig = {
    key: 'root',
    storage,
};

const middlewareEnhancer=applyMiddleware(thunk)
const persist= persistReducer(persistConfig,rootReducer)
const store =createStore(persist,undefined, middlewareEnhancer)


// const store =createStore(rootReducer, middlewareEnhancer)
const persistor=persistStore(store);
export {store,persistor}
// export {store}