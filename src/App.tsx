import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import GlobalStyle from './styles/global';
import Main from './pages/main';
import { Modal } from './components';

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
        <GlobalStyle />
        <Modal />
      </HashRouter>
    </PersistGate>
  </Provider>
);

export default App;
