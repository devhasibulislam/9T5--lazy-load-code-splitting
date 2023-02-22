import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
const About = lazy(() => import("../pages/About"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback="Loading...">
            <About />
          </Suspense>
        ),
      },
    ],
  },
]);

export default routes;
