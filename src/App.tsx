import { Home } from "./pages/home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import { Users } from "./pages/users/Users";
import { Products } from "./pages/products/Products";
import { Navbar } from "./Components/nav bar/Navbar";
import { Footer } from "./Components/footer/Footer";
import { Menu } from "./Components/menu/Menu";
import "./styles/global.scss"
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import SingleUser from "./pages/SingleUser/SingleUser";

const Layout = () =>{
  return (
    <div className="main">
      <Navbar></Navbar>
      <div className="container">
        <div className="menuContainer">
          <Menu/>
        </div>
        <div className="contentContainer">
          <Outlet/>
        </div>
      </div>
      <Footer></Footer>       
    </div>
  )
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"user",
          element:<Users/>
        },
        {
          path:"product",
          element:<Products/>
        },
        {
          path:"product/:id",
          element:<SingleProduct/>
        },
        {
          path:"user/:id",
          element:<SingleUser/>
        },
      ]
    },
    
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
