import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { IComicState } from './comic/reducer/types';
import reducers from './rootReducer';
import sagas from './rootSaga';
import { IModalState } from './modal/reducer/types';

export interface IState {
  comic: IComicState;
  modal: IModalState;
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(
  persistReducer(
    {
      key: 'marvel-react',
      storage,
      whitelist: ['auth'],
    },
    reducers,
  ),
  composeWithDevTools(applyMiddleware(...middlewares)),
);

const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
