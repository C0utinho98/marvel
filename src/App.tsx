import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import GlobalStyle from './styles/global';
import Main from './pages/main';
import { Modal } from './components';

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Main />
      <GlobalStyle />
      <Modal />
    </PersistGate>
  </Provider>
);

export default App;
