import React from 'react';
import Navigation from './Navigation';
import store from './redux/store';
import { Provider } from 'react-redux';

import { ToastContainer } from 'react-toastify';

// Create the persistor

const App = () => {
  return (
    <Provider store={store}>
      {/* PersistGate delays rendering until the persisted state is loaded */}
    
        <Navigation />
        <ToastContainer/>
     
    </Provider>
  );
};

export default App;
