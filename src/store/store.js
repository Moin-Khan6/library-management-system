// import { configureStore } from '@reduxjs/toolkit'
// import reducer from './reducers'
// export const store = configureStore({ reducer })

import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from './reducers'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for we

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,}),
  })
  
export const persistor = persistStore(store)










// import { configureStore } from '@reduxjs/toolkit'
// import reducer from './reducers'

// import storage from 'redux-persist/lib/storage';
// import { persistReducer, persistStore } from 'redux-persist';
// import thunk from 'redux-thunk';

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, reducer)

// export const store = configureStore({
//   reducer: persistedReducer,
//   devTools: process.env.NODE_ENV !== 'production',
//   middleware: [thunk]
// })

// export const persistor = persistStore(store)




