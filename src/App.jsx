import { lazy, Suspense } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import PrivateRoutes from "./utils/private-route";
import { Toaster } from "react-hot-toast";
import { StoreProvider } from "./context/store";
import { LoadingSpinner } from "./components/";

// Lazy imports
const Home = lazy(() => import("./pages/Home"));
Home.preload = () => import("./pages/Home");
Home.preload();

const NotFound = lazy(() => import("./pages/NotFound"));
const About = lazy(() => import("./pages/About"));
const WorkDetail = lazy(() => import("./pages/WorkDetail"));
const Work = lazy(() => import("./pages/Work"));
const WorksLayout = lazy(() => import("./layouts/WorksLayout"));
const Career = lazy(() => import("./pages/Career"));
const Support = lazy(() => import("./pages/Support"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route element={<PrivateRoutes />}>
        <Route
          index
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="work"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <WorksLayout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Work />
              </Suspense>
            }
          />
          <Route
            path=":name"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <WorkDetail />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="about"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="support"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Support />
            </Suspense>
          }
        />
        <Route
          path="career"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Career />
            </Suspense>
          }
        />
        <Route path="/public/privacy-policy.html" />
      </Route>
      <Route
        path="*"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <NotFound />
          </Suspense>
        }
      />
    </Route>
  )
);

const App = () => {
  return (
    <StoreProvider>
      <RouterProvider router={router} />
      <Toaster />
    </StoreProvider>
  );
};

export default App;
