import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet />
  </div>
);

const Gloceries = lazy(() => import("./components/Gloceries"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/gloceries",
        element: <Gloceries />,
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={<h1>Loading ...</h1>}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
