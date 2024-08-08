import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import HomeLayout from './Layouts/HomeLayout.jsx';
import AdminLayout from './Layouts/AdminLayout.jsx';
import SellerLayout from './Layouts/SellerLayout.jsx';
import UserSignupPage from './Pages/User/UserSignupPage.jsx';
import UserSignInPage from './Pages/User/UserSignInPage.jsx';
import SellerSignupPage from './Pages/Seller/SellerSignupPage.jsx';
import SellerSigninPage from './Pages/Seller/SellerSigninPage.jsx';
import UserDashboard from './Components/User/UserDashboard.jsx';
import SellerDashboard from './Components/Seller/SellerDashboard.jsx';
import ProductsAddPage from './Pages/Seller/ProductsAddPage.jsx';
import DisplayProducts from './Components/User/DisplayProducts.jsx';
import { ChakraProvider } from '@chakra-ui/react'
import ProductsViewPage from './Pages/Seller/ProductsViewPage.jsx';
import AdminDashboard from './Components/Admin/AdminDashboard.jsx';
import UsersView from './Components/Admin/UsersView.jsx';
import SellerView from './Components/Admin/SellerView.jsx';
import SellerItemView from './Components/Admin/SellerItemView.jsx';
SellerItemView







const router = createBrowserRouter([
  {

    element: <HomeLayout />,
    children:
      [
        {
          path:"/",
          element:<UserDashboard/>
        },
        {
          path: "/user/signup",
          element: <UserSignupPage />,
        },
        {
          path:"/user/signin",
          element:<UserSignInPage/>
        },
        

      ],
  },
  {
    element:<SellerLayout/>,
    children:[
      {
        path:"/sellerdashboard",
        element:<SellerDashboard/>

      },
      {
        path:"/seller/signup",
        element:<SellerSignupPage/>
      },
      {
        path:"/seller/login",
        element:<SellerSigninPage/>
      },
      {
        path:"/seller/productsadd",
        element:<ProductsAddPage/>
      },
      {
        path:"/seller/productsview",
        element:<ProductsViewPage/>
      }
    ]
  },
  {
    element:<AdminLayout/>,
    children:[
      {
        path:"/admin/admindashboard",
        element:<AdminDashboard/>
      },
      {
        path:"/admin/userview",
        element:<UsersView/>
      },
      {
        path:"/admin/sellerview",
        element:<SellerView/>
      },
      {
        path:"/admin/selleritemview",
        element:<SellerItemView/>
      }
    ],
  },

  

]);








ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <RouterProvider router={router} />

    </ChakraProvider>
    
   
  </React.StrictMode>,
)
