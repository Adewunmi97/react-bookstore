import React from 'react';
import { Provider } from 'react-redux';
import Nav from './components/Navigation';
import store from './redux/configureStore';
import './App.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="main-container">
          <Nav />
        </div>
      </Provider>
    </>
  );
}

export default App;
