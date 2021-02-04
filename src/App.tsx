import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import GlobalStyle from './styles/global';
import Routes from './routes';
import { Modal } from './components';

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
        <Modal />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default App;
