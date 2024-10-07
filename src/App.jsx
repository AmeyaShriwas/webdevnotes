import React from 'react';
import Navigation from './Navigation';
import store from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

// Create the persistor
let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      {/* PersistGate delays rendering until the persisted state is loaded */}
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
