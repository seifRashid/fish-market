import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RoleSelection from './pages/auth/RoleSelection';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import FishListings from './pages/listings/FishListings';
import FishermanDashboard from './pages/dashboard/FishermanDashboard';
import BuyerDashboard from './pages/dashboard/BuyerDashboard';

function App() {
  return (
<<<<<<< HEAD
    <Router>
=======
    <>
>>>>>>> parent of f456932 (componentsupdate)
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/roleselection" element={<RoleSelection />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/listings" element={<FishListings />} />
        <Route path="/fisherman/dashboard" element={<FishermanDashboard />} />
        <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;