import React, { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "./Layout";
import Loader from "./common/Loader.jsx";
import Sponsors from "./pages/sponsors/Sponsors.jsx";
import Merchandise from "./pages/merchandise/Merchandise.jsx";
import Contacts from "./pages/contacts/Contacts.jsx";
import Schedule from "./pages/schedule/Schedule.jsx";

// Lazy load pages
const Home = lazy(() => import("./pages/home/Home"));
const Gallery = lazy(() => import("./pages/gallery/Gallery"));
const Events = lazy(() => import("./pages/events/Events"));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="events" element={<Events />} />
            <Route path="sponsors" element={<Sponsors />} />
            <Route path="merchandise" element={<Merchandise />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="schedule" element={<Schedule />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
