import{ useContext } from 'react';
import { AuthContext } from './components/context/AuthContext.jsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './components/context/AuthContext.jsx';
import LoginPage from './components/login.jsx';
import DashboardPage from './components/dashboard.jsx';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? children : <Navigate to="/login" />;
};

const App = () => (
  <AuthProvider>
    <Router>
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen text-white font-sans">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route 
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  </AuthProvider>
);

export default App;
