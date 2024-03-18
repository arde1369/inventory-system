import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { Login } from './components/Login';
import { AuthenticationPage, authAction } from './pages/AuthenticationPage';
import { HomePage } from './pages/HomePage';
import { checkIsLoggedIn } from './components/util/AuthenticationHelper';
import RootPage from './pages/RootPage'
import { logoutHelper } from './components/util/LogoutHelper';
import { NewOrderPage, newOrderAction } from './pages/NewOrderPage';
import { InventoryPage } from  './pages/InventoryPage'
import { LookupOrderPage } from  './pages/LookupOrderPage'

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <AuthenticationPage />,
      action : authAction
    },
    {
      path : '/inventory-system',
      element : <RootPage />,
      children : [
        {
          index : true,
          element : <HomePage />,
          loader : checkIsLoggedIn
        },
        {
          path : 'new-order',
          element : <NewOrderPage />,
          loader : checkIsLoggedIn
        },
        {
          path : 'inventory',
          element : <InventoryPage />,
          loader : checkIsLoggedIn
        },
        {
          path : 'lookup-order',
          element : <LookupOrderPage />,
          loader : checkIsLoggedIn
        },
      ]
    },
    {
      path : '/logout',
      action : logoutHelper
    }

  ])

  return (
      <RouterProvider router={router} />
  );
}

export default App;
