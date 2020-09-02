import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

if (process.env.NODE_ENV !== 'production' && (module as any).hot) {
  (module as any).hot.accept('./App', renderApp);
}

renderApp();
