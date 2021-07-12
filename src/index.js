import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import createStore from './store';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css'
import './app.css';


const store = createStore();

// setTimeout(() => {
//   store.dispatch({
//     type: 'SET_PRODUCTS',
//     payload: [
//       {
//         id: 0,
//         title: 'Hello Oleeeee'
//       }
//     ]
//   });
// }, 1000);

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById('root')
);
