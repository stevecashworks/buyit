import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home"
import "./App.css"
import SingleProduct from "./pages/singleproduct/singleProduct";
import WrappedCart from "./pages/cart/cart";
import Vendor from "./pages/vendor/vendor";
import Login from "./pages/login/login";
import Register from "./pages/Register/register";
const routes=[
{path:"/", element:<Home/>},
{path:"/singleproduct/:id",element:<SingleProduct/>},
{path:"/cart",element:<WrappedCart/>},
{path:"/vendor",element:<Vendor/>},
{path:"/login", element:<Login/>},
{path:"/register", element:<Register/>},
]


export default createBrowserRouter(routes)