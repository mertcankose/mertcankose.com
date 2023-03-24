import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const RootLayout = () => {
  return (
    <main className="max-w-7xl mx-auto mb-8">
      <Header className="h-24" />
      <Outlet />
      <Footer className="mt-16" />
    </main>
  );
};

export default RootLayout;
