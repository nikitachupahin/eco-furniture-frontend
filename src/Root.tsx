import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { HomePage } from './pages/HomePage';
import { ToastConfig } from './components/ToastConfig';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'catalog',
        element: <div>Catalog Page</div>,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/registration',
    element: <RegisterPage />,
  },
]);

export const Root = () => {
  return (
    <>
      <ToastConfig />
      <RouterProvider router={router} />
    </>
  );
};
