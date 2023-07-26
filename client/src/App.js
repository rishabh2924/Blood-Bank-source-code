import { Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/Routes/ProtectedRoute"
import PublicRoute from "./components/Routes/PublicRoute";
import Donar from "./pages/Dashboard/Donar";
import Hospital from "./pages/Dashboard/Hospital";
import OrganisationPage from "./pages/Dashboard/OrganisationPage";
import Consumer from "./pages/Dashboard/Consumer";
import Donation from "./pages/Dashboard/Donation";
import Analytics from "./pages/Dashboard/Analytics";
import DonarList from "./pages/Admin/DonarList";
import HopitalList from "./pages/Admin/HopitalList";
import OrganisationList from "./pages/Admin/OrganisationList";
import AdminHome from "./pages/Admin/AdminHome";


function App() {
  return (
    <div >
      <ToastContainer/>
      <Routes>
        <Route path="/" element ={
         <ProtectedRoute>
        <HomePage/>
        </ProtectedRoute>
        }></Route>
     
        <Route path="/organisation" element ={
         <ProtectedRoute>
        <OrganisationPage/>
        </ProtectedRoute>
        }></Route>
        <Route path="/donar" element ={
         <ProtectedRoute>
        <Donar/>
        </ProtectedRoute>
        }></Route>
        <Route path="/hospital" element ={
         <ProtectedRoute>
        <Hospital/>
        </ProtectedRoute>
        }></Route>
        <Route path="/analytics" element ={
         <ProtectedRoute>
        <Analytics/>
        </ProtectedRoute>
        }></Route>
        <Route path="/consumer" element ={
         <ProtectedRoute>
        <Consumer/>
        </ProtectedRoute>
        }></Route>
        <Route path="/donar-list" element ={
         <ProtectedRoute>
        <DonarList/>
        </ProtectedRoute>
        }></Route>
        <Route path="/hospital-list" element ={
         <ProtectedRoute>
        <HopitalList/>
        </ProtectedRoute>
        }></Route>
        <Route path="/donation" element ={
         <ProtectedRoute>
        <Donation/>
        </ProtectedRoute>
        }></Route>
        <Route path="/org-list" element ={
         <ProtectedRoute>
        <OrganisationList/>
        </ProtectedRoute>
        }></Route>
        <Route path="/admin" element ={
         <ProtectedRoute>
        <AdminHome/>
        </ProtectedRoute>
        }></Route>

        

        <Route path="/login" element={
        <PublicRoute>
        <Login/>
        </PublicRoute>}></Route>
        <Route path="/register" element={
        <PublicRoute>
        <Register/>
        </PublicRoute>} ></Route>
      </Routes>
      
    </div>
  );
}

export default App;
