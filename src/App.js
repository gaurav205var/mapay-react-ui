import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Password from "./pages/Password";
import NewPassword from "./pages/NewPassword";
import Profile from "./pages/Profile";
import Certificate from "./pages/Certificate";
import Vault from "./pages/Vault";
import MessageCards from "./pages/Message";
import MyApplication from "./pages/MyApplication";
import EmailVerify from "./pages/EmailVerify";
import EmailSuccessful from "./pages/EmailSuccessful"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgot-password" element={<Password />} />
          <Route path="/new-password/*" element={<NewPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/certificates" element={<Certificate />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/my-messages" element={<MessageCards />} />
          <Route path="/my-applications" element={<MyApplication/>} />
          <Route path="/email-verification/:id" element={<EmailVerify/>} />
          <Route path="/verification-successful" element={<EmailSuccessful/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
