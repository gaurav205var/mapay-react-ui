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
import InitialApplication from "./pages/InitialApplication";
import RenewalApplication from "./pages/RenewalApplication";
import InitialRegistration from "./pages/InitialRegistration";

import { ProtectedRoute } from "./Helper/ProtectedRoutes";


function App() {
  const Applicant = 1;
  const Admin = 2;
  const Reviewer = 3;

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<Password />} />
          <Route path="/new-password/*" element={<NewPassword />} />
          <Route path="/email-verification/:id" element={<EmailVerify />} />
          <Route path="/verification-successful" element={<EmailSuccessful />} />
          <Route path="/dashboard" element={<ProtectedRoute type={Applicant}>
            <Dashboard />
          </ProtectedRoute>
          } />
          <Route path="/admin-dashboard" element={<ProtectedRoute type={Admin} >
            <AdminDashboard />
          </ProtectedRoute>
          } />
          <Route path="/reviewer-dashboard" element={<ProtectedRoute type={Reviewer} >
            <ReviewDashboard />
          </ProtectedRoute>
          } />
          <Route path="/profile" element={<ProtectedRoute type={Applicant}>
            <Profile />
          </ProtectedRoute>} />
          <Route path="/admin-profile" element={<ProtectedRoute type={Admin}>
            <AdminProfile />
          </ProtectedRoute>} />
          <Route path="/reviewer-profile" element={<ProtectedRoute type={Reviewer}>
            <ReviewerProfile />
          </ProtectedRoute>} />
          <Route path="/certificates" element={<ProtectedRoute type={Applicant}>
            <Certificate />
          </ProtectedRoute>} />
          <Route path="/admin-credentials" element={<ProtectedRoute type={Admin}>
            <AdminCertificate />
          </ProtectedRoute>} />
          <Route path="/vault" element={<ProtectedRoute type={Applicant}>
            <Vault />
          </ProtectedRoute>} />
          <Route path="/my-messages" element={<ProtectedRoute type={Applicant}>
            <MessageCards />
          </ProtectedRoute>} />
          <Route path="/admin-messages" element={<ProtectedRoute type={Admin}>
            <AdminMessage />
          </ProtectedRoute>} />
          <Route path="/reviewer-messages" element={<ProtectedRoute type={Reviewer}>
            <ReviewMessage />
          </ProtectedRoute>} />
          <Route path="/my-applications" element={<ProtectedRoute type={Applicant}>
            <MyApplication />
          </ProtectedRoute>} />
          <Route path="/archived-applications" element={<ProtectedRoute type={Reviewer}>
            <ArchivedApplications />
          </ProtectedRoute>} />
          <Route path="/initial-application" element={<ProtectedRoute type={Applicant}>
            <InitialApplication />
          </ProtectedRoute>} />
          <Route path="/renewal-application" element={<ProtectedRoute type={Applicant}>
            <RenewalApplication />
          </ProtectedRoute>} />
          <Route path="/initial-application-registration" element={<ProtectedRoute type={Applicant}>
            <InitialRegistration />
          </ProtectedRoute>} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
