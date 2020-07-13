import React, {StrictMode} from 'react';
import {render} from 'react-dom';
import App from './App';


render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);


const rootElement = document.getElementById("root");
render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement);
