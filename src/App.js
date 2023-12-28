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
import AdminDashboard from "./AdminPages/AdminDashboard";
import ReviewDashboard from "./ReviewerPages/ReviewDashboard";
import AdminCertificate from "./AdminPages/AdminCertificate";
import AdminMessage from "./AdminPages/AdminMessage";
import AdminProfile from "./AdminPages/AdminProfile";
import ReviewMessage from "./ReviewerPages/ReviewMessage";
import ReviewerProfile from "./ReviewerPages/ReviewerProfile";
import ArchivedApplications from "./ReviewerPages/ArchivedApplications";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/reviewer-dashboard" element={<ReviewDashboard />} />
          <Route path="/forgot-password" element={<Password />} />
          <Route path="/new-password/*" element={<NewPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin-profile" element={<AdminProfile/>} />
          <Route path="/reviewer-profile" element={<ReviewerProfile/>} />
          <Route path="/certificates" element={<Certificate />} />
          <Route path="/admin-credentials" element={<AdminCertificate />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/my-messages" element={<MessageCards />} />
          <Route path="/admin-messages" element={<AdminMessage/>} />
          <Route path="/reviewer-messages" element={<ReviewMessage/>} />
          <Route path="/my-applications" element={<MyApplication />} />
          <Route path="/email-verification/:id" element={<EmailVerify />} />
          <Route path="/verification-successful" element={<EmailSuccessful />} />
          <Route path="/archived-applications" element={<ArchivedApplications/>} />
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
