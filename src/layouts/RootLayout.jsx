import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer, Header } from "../components";
import { PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { analytics, logEvent } from "../firebase";

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    logEvent(analytics, "page_view", {
      page_path: location.pathname,
      page_title: document.title,
    });
  }, [location]);

  return null;
};

const RootLayout = () => {
  return (
    <main className="max-w-7xl mx-auto mb-8 flex flex-col">
      <Analytics />
      <Header className="h-24" />
      <PhotoProvider>
        <Outlet />
      </PhotoProvider>
      <Footer className="mt-16" />
    </main>
  );
};

export default RootLayout;
