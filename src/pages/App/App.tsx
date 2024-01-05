import store from "@store/store";
import React, { Suspense, useEffect } from "react";
import { Provider } from "react-redux";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import Dashboard from "@pages/Dashboard/Dashboard";

type Props = {};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Dashboard />} />
    </>
  )
);

const App = (props: Props) => {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: -200,
    });
  }, []);
  return (
    <Provider store={store}>
      <Suspense fallback={null}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  );
};

export default App;
