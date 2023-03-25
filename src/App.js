import React, { useState, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MenuOpen } from "@mui/icons-material";
import HomePage from "./pages/HomePage";
import { UserContext, ThemeContext, NavMenuContext } from "./contexts";
import CONSTANTS from "./constants";
import SignUpForm from "./components/forms/SignUpForm";
import Chat from "./components/Chat";
import LoaderPage from "./pages/LoaderPage";
import NavMenu from "./components/NavMenu";
const { THEMES } = CONSTANTS;
const MENU_ACTIONS = {
  MENU_OPEN: "MENU_OPEN",
  MENU_CLOSE: "MENU_CLOSE",
};
const reducer = (state, action) => {
  switch (action.type) {
    case MENU_ACTIONS.MENU_OPEN: {
      return { ...state, isMenuOpen: true };
    }
    case MENU_ACTIONS.MENU_CLOSE: {
      return { ...state, isMenuOpen: false };
    }
    default:
      return state;
  }
};
const App = () => {
  const [user] = useState({
    id: 4,
    firstName: "Brad",
    lastName: "Pitt",
  });
  const [theme, setTheme] = useState(THEMES.LIGHT);
  const [state, dispatch] = useReducer(reducer, { isMenuOpen: false });
  const handleMenuOpen = () => dispatch({ type: MENU_ACTIONS.MENU_OPEN });
  const handleMenuClose = () => dispatch({ type: MENU_ACTIONS.MENU_CLOSE });
  return (
    <NavMenuContext.Provider value={{ state, handleMenuClose }}>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <UserContext.Provider value={user}>
          <BrowserRouter>
            <MenuOpen onClick={handleMenuOpen} />
            <NavMenu />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/load" element={<LoaderPage />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </NavMenuContext.Provider>
  );
};

export default App;
