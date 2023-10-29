import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Signin from "../pages/Signin";
import ServiceDetails from "../components/services/ServiceDetails";
import Checkout from "../pages/Checkout";
import Error from "../pages/404";
import AddServices from "../components/services/addServices";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRout from "./PrivateRout";
import Services from "../components/services/Services";


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
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/addService',
        element: <AddServices />
      },
      {
        path: '/checkout/:id',
        element: <PrivateRout><Checkout /></PrivateRout>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/bookings',
        element: <PrivateRout><Bookings /></PrivateRout>
      }
    ]
  },
]);

export default router;