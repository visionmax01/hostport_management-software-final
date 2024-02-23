
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaymentPage from "./PaymentPage/PaymentPage";
import SupportPage from "./SupportPage/SupportPage";
import Login from "./LoginRegisterPage/Login";
import Home from "./HomePage/Home";
import ServicesPage from "./ServicePage/ServicesPage";
import Dashboard from "./AdminPages/Dashboard";
import ManageUser from "./AdminPages/Manage-user";
import PaymentDetail from "./AdminPages/PaymentDetail";
import NewRequest from "./AdminPages/New-joining-req";
import UserComplaint from "./AdminPages/UserComplaint";
import AddUser from "./FormsPage/AddUser";
import UpdateUser from "./FormsPage/UpdateUserDetail";
import UserProfile from "./ProfilePage/UserProfile";
import ActivateUser from "./FormsPage/activate-user";
import AdminProfile from "./ProfilePage/admin-profile";
import ChangePassword from "./FormsPage/ChangePassword";
import Register from "./LoginRegisterPage/AddAdmin";
import AdminNavBar from "./Components/AdminNavBar";
import ForgetPassword from "./LoginRegisterPage/ForgetPassword";
import ResetPassword from "./LoginRegisterPage/ResetPassword";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/payment" element={<PaymentPage />}></Route>
          <Route path="/support" element={<SupportPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/services" element={<ServicesPage />}></Route>
          <Route path="/admin12" element={<AdminNavBar />}></Route>
          <Route path="/forget-password" element={<ForgetPassword />}></Route>
          <Route path="/reset-password/:token" element={<ResetPassword />}></Route>



          { /*  protected routes */ }
          <Route path="/admin-dashboard" element={<Dashboard />}></Route>
          <Route path="/manage-user" element={<ManageUser />}></Route>
          <Route path="/payment-detail" element={<PaymentDetail />}></Route>
          <Route path="/new-joining-request" element={<NewRequest />}></Route>
          <Route path="/user-complaint" element={<UserComplaint />}></Route>
          <Route path="/add-user" element={<AddUser />}></Route>
          <Route path="/update-user-detail" element={<UpdateUser />}></Route>
          <Route path="/user-profile-view" element={<UserProfile />}></Route>
          <Route path="/user-activation" element={<ActivateUser />}></Route>
          <Route path="/admin-profile" element={<AdminProfile />}></Route>
          <Route path="/change-password" element={<ChangePassword />}></Route>
          <Route path="/register" element={<Register />}></Route>
          { /*  protected routes */ }
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
