import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { Login } from './components/Login';
import { AuthenticationPage, authAction } from './pages/AuthenticationPage';
import { HomePage } from './pages/HomePage';
import { checkIsLoggedIn } from './components/util/AuthenticationHelper';
import RootPage from './pages/RootPage'
import { logoutHelper } from './components/util/LogoutHelper';

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <AuthenticationPage />,
      action : authAction
    },
    {
      path : '/home',
      element : <RootPage />,
      children : [
        {
          index : true,
          element : <HomePage />,
          loader : checkIsLoggedIn
        }
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
