import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
import { PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const RootLayout = () => {
  return (
    <main className="max-w-7xl mx-auto mb-8 flex flex-col">
      <Header className="h-24" />
      <PhotoProvider>
        <Outlet />
      </PhotoProvider>
      <Footer className="mt-16" />
    </main>
  );
};

export default RootLayout;
