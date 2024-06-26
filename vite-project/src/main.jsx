import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Error from './components/Error.jsx';
import Help from './components/Hello.jsx';
import Body from './components/Body.jsx';
import RestaurantDetails from './components/RestaurantDetails.jsx';
import Sample from './components/Sample.jsx';
import Memo from './components/Memo.jsx';
import Login from './components/Login.jsx';
import { lazy, Suspense } from 'react';

const Cart = lazy(() => import('./components/Cart.jsx'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Body/>
      },
      {
        path: '/cart',
        element: <Suspense fallback={<h1>Component Loading</h1>}><Cart/></Suspense>
      },
      {
        path: '/help',
        element: <Help/>
      },
      // dynamic routing
      {
        path: '/restaurant/:resId',
        element: <RestaurantDetails />
      },
      {
        path: '/sample',
        element: <Sample />
      },
      {
        path: '/memo',
        element: <Memo/>
      },
      {
        path: '/login',
        element: <Login/>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={appRouter}></RouterProvider>
)
