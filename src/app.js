import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import RestroInfo from "./components/RestroInfo";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import LoginForm from "./components/LoginForm";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    //fetch data and send Id and password

    const data = {
      name: "Akshay saini",
    };

    setUserName(data.name);
  }, []);

  return (
    <div>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </div>
  );
};

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/restaurant/:id",
          element: <RestroInfo />,
        },
        {
          path: "/login",
          element: <LoginForm />,
        },
        {
          path: "/grocery",
          element: (
            <Suspense fallback={<Shimmer />}>
              <Grocery />
            </Suspense>
          ),
        },
      ],
      errorElement: <Error />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
    },
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider
    router={appRouter}
    future={{
      v7_startTransition: true,
    }}
  />
);
