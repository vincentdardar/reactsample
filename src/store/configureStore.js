import {createStore, applyMiddleware, compose} from "redux";

import thunk from "redux-thunk";

import rootReducer from "../reducers/rootReducer";

export default function configureStore(preloadedState) {
    const middlewares = [thunk];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const storeEnhancers = [middlewareEnhancer];

    const composedEnhancer = compose(...storeEnhancers);

    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancer
    );

    if(process.env.NODE_ENV !== "production") {
        if(module.hot) {
            module.hot.accept("../reducers/rootReducer", () =>{
                const newRootReducer = require("../reducers/rootReducer").default;
                store.replaceReducer(newRootReducer)
            });
        }
    }

    return store;
}