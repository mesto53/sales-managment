import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserPovider } from './context/user.context';
import { CategoriesProvider } from './context/categories.context';
import { CardProvider } from './context/card.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserPovider>
        <CategoriesProvider>
          <CardProvider>
            <App/>
          </CardProvider> 
        </CategoriesProvider>
      </UserPovider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
