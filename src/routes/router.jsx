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
import AllUsers from "../pages/dashboard/Users/AllUsers";
import AddUser from "../pages/dashboard/Users/AddUser";
import UpdateUser from "../pages/dashboard/Users/UpdateUser";
import ViewDetails from "../pages/dashboard/Users/ViewDetails";
import AllProducts from "../pages/dashboard/products/AllProducts";
import AddProducts from "../pages/dashboard/products/AddProducts";
import UpdateProduct from "../pages/dashboard/products/UpdateProduct";
import PrivateRouter from "./PrivateRoute";
import Test from "../Test";

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
    element: (
      <PrivateRouter>
        <DashboardLayout />
      </PrivateRouter>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },

      // Products
      {
        path: "/dashboard/addproduct",
        element: <AddProducts />,
      },
      {
        path: "/dashboard/allproducts",
        element: <AllProducts />,
      },
      {
        path: "/dashboard/updateproduct/:id",
        element: <UpdateProduct />,
      },

      // Users
      {
        path: "/dashboard/users",
        element: <AllUsers />,
      },
      {
        path: "/dashboard/adduser",
        element: <AddUser />,
      },
      {
        path: "/dashboard/updateuser/:id",
        element: <UpdateUser />,
      },
      {
        path: "/dashboard/userdetails/:id",
        element: <ViewDetails />,
      },
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
  {
    path: "/test",
    element: <Test />,
  },
]);

export default router;
