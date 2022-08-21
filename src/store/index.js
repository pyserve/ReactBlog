import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducers } from './reducers';
import { persistStore,persistReducer, } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: []
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)