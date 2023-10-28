import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Signin from "../pages/Signin";
import ServiceDetails from "../components/services/ServiceDetails";
import Checkout from "../pages/Checkout";
import Error from "../pages/404";
import AddServices from "../components/services/addServices";


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/signin',
        element: <Signin />
      },
      {
        path: '/services/:id',
        element: <ServiceDetails />,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/addService',
        element: <AddServices />
      },
      {
        path: '/checkout',
        element: <Checkout />
      }
    ]
  },
]);

export default router;