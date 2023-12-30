import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Header from "./Component/Header";
import Body from "./Component/Body";
import SinglePage from "./Component/SinglePage";
import Cart from "./Component/Cart";

const App = () => {
  return (
    <>
      <div className="app h-full ">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "/singlePage/:id",
        element: <SinglePage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default App;
