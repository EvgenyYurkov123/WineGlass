import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { MeContextProvider } from './context/context.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import store from './redux/store.ts';
ReactDOM.createRoot(document.getElementById('root')!).render(

<Provider store={store}>
  <BrowserRouter>
  <MeContextProvider>
      <ChakraProvider>
    <App />
        </ChakraProvider>
  </MeContextProvider>
  </BrowserRouter>
</Provider>
);
