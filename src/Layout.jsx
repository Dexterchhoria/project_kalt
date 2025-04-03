// import "./App.css";
// import Footer from "./common/Footer";
// import Header from "./common/Header";
// import Home from "./pages/home/Home";

// function Layout() {
//   return (
//     <>
//       <div className="bg-black h-[100vh]">
//         <div>
//           <Header />
//         </div>
//         <div>
//           <Home />
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default Layout;
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";

const Layout = () => {
  return (
    <>
      <Header /> {/* Navbar will always be present */}
      <main className="min-h-screen bg-black text-white">
        <Outlet /> {/* This will render the current page */}
      </main>
      <Footer /> {/* Footer will always be present */}
    </>
  );
};

export default Layout;
