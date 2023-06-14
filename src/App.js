import React from "react";
import { Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import OverviewPage from "./pages/OverviewPage";
import AccountPage from "./pages/AccountPage";
import SettingsPage from "./pages/SettingsPage";
import UsersPage from "./pages/UsersPage";
import ClientsPage from "./pages/ClientsPage";
import HomePage from "./pages/HomePage";
import RestoRegister from "./pages/RestauInformations/RestoRegister";
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<HomePage/>} path="/"/>
      <Route element={<LoginPage/>}  path="/login" />
      <Route element={<SignupPage/>} path="/signup" />
      <Route element={<ProtectedRoute><OverviewPage/></ProtectedRoute>} path="/overview"/>
      <Route element={<ProtectedRoute><AccountPage/></ProtectedRoute>} path="/account"/>
      <Route element={<ProtectedRoute><SettingsPage/></ProtectedRoute>} path="/settings"/>
      <Route element={<ProtectedRoute><UsersPage/></ProtectedRoute>} path="/users"/>
      <Route element={<ProtectedRoute><ClientsPage/></ProtectedRoute>} path="/clients"/>
      <Route element={<ProtectedRoute><RestoRegister/></ProtectedRoute>} path="/regrestaurant"/>
    </Routes>
  );
}

export default App;
