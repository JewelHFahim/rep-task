import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/login/Login";
import Signin from "../pages/login/Signin";
import ProductDetails from "../components/ProductDetails";
import Cart from "../pages/cart/Cart";
import Shop from "../pages/shop/Shop";
import About from "../pages/About/About";
import Contact from "../pages/contact/Contact";
import SecondaryLayout from "../layout/SecondaryLayout";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import AddProducts from "../pages/dashboard/AddProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop/:id",
        element: <ProductDetails />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },

  {
    path: "/",
    element: <SecondaryLayout />,
    children: [
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },

  // Dashboard
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/addproduct",
        element: <AddProducts />,
      }
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signin />,
  },
]);

export default router;
