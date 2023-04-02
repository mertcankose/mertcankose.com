import { Fragment } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import PrivateRoutes from "./utils/private-route";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import WorkDetail from "./pages/WorkDetail";
import Work from "./pages/Work";
import WorksLayout from "./layouts/WorksLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route element={<PrivateRoutes />}>
        <Route index element={<Home />} />
        <Route path="work" element={<WorksLayout />}>
          <Route index element={<Work />} />
          <Route path=":name" element={<WorkDetail />} />
        </Route>

        <Route path="about" element={<About />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return (
    <Fragment>
      <RouterProvider router={router} />;
      <ToastContainer position="top-center" autoClose={1000} />
    </Fragment>
  );
};

export default App;
