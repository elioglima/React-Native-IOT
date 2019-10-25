import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import { reducers } from "./reducers";
import sagas from "./sagas";

const middlewares = []
const sagaMiddleware = createSagaMiddleware()
middlewares.push(sagaMiddleware)

const store = createStore(
    reducers(),
    compose(
        applyMiddleware(
            ...middlewares,
        )
    )
);

sagaMiddleware.run(sagas)
export { store }