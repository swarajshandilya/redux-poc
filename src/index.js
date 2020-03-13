import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import './index.css';
import Counter from './App';

  
const store = createStore(reducer);
const App = () => (
    <Provider store={store}>
      <Counter/>
    </Provider>
  );
ReactDOM.render(<App />, document.getElementById('root'));

