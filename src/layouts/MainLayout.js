import { ReactNode, FC } from "react";
import Navbar from "./Navbar"
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen h-full mt-[150px] mb-24">
        <div className="container">
          {children}
          </div>
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;