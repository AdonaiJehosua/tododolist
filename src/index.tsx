import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { TodododoProvider } from "./Context/toDododoContext";



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <TodododoProvider>
      <App />
    </TodododoProvider>
  </React.StrictMode>
);