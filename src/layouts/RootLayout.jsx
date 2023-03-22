import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const RootLayout = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Header className="h-24" />
      <Outlet />
      {/* <Footer /> */}
    </main>
  );
};

export default RootLayout;
