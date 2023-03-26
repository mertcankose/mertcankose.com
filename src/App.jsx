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
import Contact from "./pages/Contact";
import WorkDetail from "./pages/WorkDetail";
import Works from "./pages/Works";
import WorksLayout from "./layouts/WorksLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route element={<PrivateRoutes />}>
        <Route index element={<Home />} />
        <Route path="works" element={<WorksLayout />}>
          <Route index element={<Works />} />
          <Route path=":name" element={<WorkDetail />} />
        </Route>

        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
