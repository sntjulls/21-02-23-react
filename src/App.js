import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  Outlet,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import StopWatchPages from "./pages/StopWatchPages";
import CiaoSection from "./components/CiaoSection";
import UserSection from "./components/UserSection";
// import NotFoundPage from "./pages/NotFoundPage";
import CounterPage from "./pages/CounterPage";
import LoaderPage from "./pages/LoaderPage";

const Section = () => {
  return (
    <>
      <h1>Common part</h1>
      <Outlet />
    </>
  );
};

const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/counter">counter</NavLink>
            </li>
            <li>
              <NavLink to="/loader">loader</NavLink>
            </li>
            <li>
              <NavLink to="/stop-watch">stop-watch</NavLink>
            </li>
            <li>
              Section:
              <ul>
                <li>
                  <NavLink to="/section/ciao">ciao</NavLink>
                </li>
                <li>
                  <NavLink to="/section/user">user</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/stop-watch" element={<StopWatchPages />} />
          <Route path="/section/" element={<Section />}>
            <Route path="ciao" element={<CiaoSection />} />
            <Route path="user" element={<UserSection />} />
          </Route>
          <Route path="/loader/" element={<LoaderPage />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
        <footer>2023</footer>
      </BrowserRouter>
    </>
  );
};

export default App;
