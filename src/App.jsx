import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ProductsPage } from "./ProductsPage";
import { TechProductsPage } from "./TechProductsPage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { LogoutLink } from "./LogoutLink";

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <ProductsPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: ".home/tech",
        element: <TechProductsPage />,
      },
      {
        path: "/home/categories",
        element: <CategoriesIndex />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

// function App() {
//   console.log("hello");
// return (
// <div>
//   <OrdersPage />
//   <LogoutLink />
// </div>
// )

export default App;
