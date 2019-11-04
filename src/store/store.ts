import { createStore, applyMiddleware } from 'redux';
import JobsApplicationReducer from '../redux/reducer';
import createSagaMiddleware from 'redux-saga';
import root from '../sagas/sagas';
import { JobState } from '../redux/types';

const makeStore = (initialState: JobState) => {
    const sagaMiddleware = createSagaMiddleware();
    const store: any = createStore(
      JobsApplicationReducer,
      initialState,
      applyMiddleware(sagaMiddleware)
    );
    
    store.sagaTask = sagaMiddleware.run(root);
    return store;
  };
  export default makeStore;