import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FormProvider } from './components/context/context';

ReactDOM.render(
  <FormProvider>
    <App />
  </FormProvider>,
  document.getElementById('root')
);
