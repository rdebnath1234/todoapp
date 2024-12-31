import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Persist config with proper storage
const persistConfig = {
    key: 'root',
    storage:AsyncStorage, // Use the storage from redux-persist
    whitelist: ['todo'], // 'todo' will be persisted
    blacklist: [] // No reducers are blacklisted (you can remove this line)
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with persisted reducer and middleware to handle serializableCheck
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Ignore specific actions
            },
        }),
});

// Create the persistor to manage the persistence layer
export const persistor = persistStore(store);
