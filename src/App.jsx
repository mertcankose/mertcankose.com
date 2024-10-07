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
import { Toaster } from "react-hot-toast";
import { StoreProvider } from "./context/store";
import Career from "./pages/Career";
import Support from "./pages/Support";

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
        <Route path="support" element={<Support />} />
        <Route path="career" element={<Career />} />
        <Route path="/public/privacy-policy.html" />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return (
    <StoreProvider>
      <RouterProvider router={router} />;
      <Toaster />
    </StoreProvider>
  );
};

export default App;
