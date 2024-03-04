// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Protected from './Components/Protected';
import PaymentPage from './PaymentPage/PaymentPage';
import SupportPage from './SupportPage/SupportPage';
import Login from './LoginRegisterPage/Login';
import Home from './HomePage/Home';
import ServicesPage from './ServicePage/ServicesPage';
import Dashboard from './AdminPages/Dashboard';
import ManageUser from './AdminPages/Manage-user';
import PaymentDetail from './AdminPages/PaymentDetail';
import NewRequest from './AdminPages/New-joining-req';
import UserComplaint from './AdminPages/UserComplaint';
import AddUser from './FormsPage/AddUser';
import UpdateUser from './FormsPage/UpdateUserDetail';
import UserProfile from './ProfilePage/UserProfile';
import ActivateUser from './FormsPage/activate-user';
import AdminProfile from './ProfilePage/admin-profile';
import ChangePassword from './FormsPage/ChangePassword';
import Register from './LoginRegisterPage/AddAdmin';
import AdminNavBar from './Components/AdminNavBar';
import ForgetPassword from './LoginRegisterPage/ForgetPassword';
import ResetPassword from './LoginRegisterPage/ResetPassword';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/admin12" element={<AdminNavBar />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />

          {/* Protected routes */}
          <Route
            path="/admin-dashboard"
            element={<Protected Component={Dashboard} />}
          />
          <Route path="/manage-user" element={<ManageUser/>}/>
          <Route path="/payment-detail" element={<PaymentDetail/>} />
          <Route path="/new-joining-request" element={<NewRequest/>} />
          <Route path="/user-complaint" element={<UserComplaint/>} />
          <Route path="/add-user" element={<AddUser  />} />
          <Route path="/update-user-detail" element={<UpdateUser />} />
          <Route path="/user-profile-view" element={<UserProfile/>} />
          <Route path="/user-activation" element={<ActivateUser />} />
          <Route path="/admin-profile" element={<AdminProfile />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/register" element={<Register/>} />
          {/* Protected routes */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
