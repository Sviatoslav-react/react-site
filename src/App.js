import React from "react";
import "./App.css";
import Nav from "./Componrnts/Nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DialogsConteiner from "./Componrnts/Dialogs/DialogsConteiner";
import UsersConteiner from "./Componrnts/Users/UsersConteiner";
import ProfileConteiner from "./Componrnts/Profile/ProfileConteiner";
import HeaderConteiner from "./Componrnts/Header/HeaderConteiner";
import LoginPage from "./Componrnts/Login/Login";

const App = (props) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="app-wrapper">
        <HeaderConteiner />
        <Nav />
        <div class="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs"
              element={<DialogsConteiner store={props.store} />}
            />

            <Route
              path="/profile/:userId?"
              element={<ProfileConteiner store={props.store} />}
            />

            <Route path="/users" element={<UsersConteiner />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
