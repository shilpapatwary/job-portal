import { createStore, applyMiddleware } from 'redux';
import JobsApplicationReducer from '../redux/reducer';
import createSagaMiddleware from 'redux-saga';
import root from '../sagas/sagas';
const sagaMiddleware = createSagaMiddleware();

export function initializeStore(initialState) {
    const store = createStore(JobsApplicationReducer, initialState, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(root);
    return store;
}